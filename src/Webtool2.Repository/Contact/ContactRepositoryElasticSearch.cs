namespace WebTool2.Repository
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;
    using Nest;
    using WebTool2.Models;

    public class ContactRepositoryElasticSearch : ContactRepository, IContactRepository
    {
        public ContactRepositoryElasticSearch(ElasticClient client)
        {
            this.ElasticClient = client;

            this.SearchDescriptor = new SearchDescriptor<Contact>();
        }

        public ContactQuery Conditions { get; set; }

        private SearchDescriptor<Contact> SearchDescriptor { get; set; }

        private ElasticClient ElasticClient { get; set; }

        private IList<QueryContainer> Query { get; } = new List<QueryContainer>();

        private IList<QueryContainer> Filter { get; } = new List<QueryContainer>();

        public ContactResultSet Search()
        {
            var result = new ContactResultSet();

            this.BuildSearchDescriptor();

            var response = this.ElasticClient.Search<Contact>(q => this.SearchDescriptor);

            result.Contacts = response.Documents.ToList();

            this.SetPaging(response, result);

            Console.WriteLine(response.DebugInformation);

            return result;
        }

        public void FilterName(string name)
        {
            if (this.ContainsPinyin(name))
            {
                this.FilterNameByPinyin(name);
            }
            else
            {
                this.FilterNameByChinese(name);
            }
        }

        public void FilterGender(string gender)
        {
            var query = new MatchQuery
            {
                Field = nameof(Contact.Gender),
                Query = gender,
            };

            this.Query.Add(query);
        }

        public void FilterAddress(string address)
        {
            var query = new MatchPhraseQuery
            {
                Field = nameof(Contact.Address),
                Query = address,
            }
            .UsePinyinAnalyzer();

            this.Query.Add(query);
        }

        public void FilterBirthday(string from, string to, bool isFromFilled, bool isToFilled)
        {
            var query = new TermRangeQuery
            {
                Field = nameof(Contact.Birthday),
            };

            if (isFromFilled)
            {
                query.GreaterThanOrEqualTo = from;
            }

            if (isToFilled)
            {
                query.LessThanOrEqualTo = to;
            }

            this.Filter.Add(query);
        }

        public void FilterPhone(string phone)
        {
            var tel = new TermQuery
            {
                Field = nameof(Contact.Tel),
                Value = phone,
            };

            var mobile = new TermQuery
            {
                Field = nameof(Contact.Mobile),
                Value = phone,
            };

            var query = new BoolQuery
            {
                Should = new QueryContainer[] { tel, mobile },
            };

            this.Filter.Add(query);
        }

        private void BuildSearchDescriptor()
        {
            var paging = this.Conditions;
            int from = paging.Page * paging.PageSize;
            int size = paging.PageSize;

            this.SearchDescriptor
                .From(from)
                .Size(size)
                .Query(q => q.Bool(b1 =>
                    b1.Must(this.Query.ToArray())
                .Filter(f => f.Bool(b2 =>
                    b2.Must(this.Filter.ToArray())))));
        }

        private void SetPaging(ISearchResponse<Contact> response, ContactResultSet result)
        {
            int pages = this.CalculatePages(response.Total, this.Conditions.PageSize);

            result.Paging = new Paging
            {
                Page = this.Conditions.Page,
                Pages = pages,
                PageSize = this.Conditions.PageSize,
            };
        }

        private void FilterNameByChinese(string name)
        {
            var query = new WildcardQuery
            {
                Field = nameof(Contact.Name),
                Value = name,
            }
                .UsePinyinAnalyzer();

            this.Filter.Add(query);
        }

        private void FilterNameByPinyin(string name)
        {
            var query = new MatchPhraseQuery
            {
                Query = name,
                Field = nameof(Contact.Name),
            }
            .UsePinyinAnalyzer();

            this.Filter.Add(query);
        }

        private bool ContainsPinyin(string name)
        {
            return Regex.IsMatch(name, "[a-zA-Z]+");
        }
    }
}