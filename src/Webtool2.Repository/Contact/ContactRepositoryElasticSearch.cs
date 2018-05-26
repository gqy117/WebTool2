namespace WebTool2.Repository
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Nest;
    using WebTool2.Models;

    public class ContactRepositoryElasticSearch
    {
        public ContactRepositoryElasticSearch(ElasticClient client)
        {
            this.ElasticClient = client;

            this.SearchDescriptor = new SearchDescriptor<Contact>();
        }

        private SearchDescriptor<Contact> SearchDescriptor { get; set; }

        private ElasticClient ElasticClient { get; set; }

        private IList<QueryContainer> Query { get; set; } = new List<QueryContainer>();

        private IList<QueryContainer> Filter { get; set; } = new List<QueryContainer>();

        public IList<Contact> Search()
        {
            this.BuildSearch();

            var response = this.ElasticClient.Search<Contact>(q => this.SearchDescriptor);

            var result = response.Documents.ToList();

            return result;
        }

        public void FilterName(string name)
        {
            var query = new WildcardQuery
            {
                Field = nameof(Contact.Name),
                Value = name,
            }
                .UsePinyinAnalyzer();

            this.Filter.Add(query);
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
                query.GreaterThanOrEqualTo = to;
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

        private void BuildSearch()
        {
            this.SearchDescriptor
                .Query(q => q.Bool(b1 =>
                    b1.Must(this.Query.ToArray())
                .Filter(f => f.Bool(b2 =>
                    b2.Must(this.Filter.ToArray())))));
        }
    }
}