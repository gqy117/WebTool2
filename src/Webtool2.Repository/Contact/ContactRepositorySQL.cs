namespace WebTool2.Repository
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.EntityFrameworkCore;
    using WebTool2.Models;

    public class ContactRepositorySQL : ContactRepository, IContactRepository
    {
        public ContactRepositorySQL(ContactContext context)
        {
            this.Context = context;
            this.Contacts = this.Context.Contacts;
        }

        public ContactQuery Conditions { get; set; }

        private IQueryable<Contact> Contacts { get; set; }

        private ContactContext Context { get; set; }

        public ContactResultSet Search()
        {
            var result = new ContactResultSet();

            int count = this.Contacts.Count();

            result.Contacts = this.GetResult();

            this.SetPagingResult(result, count);

            return result;
        }

        public void FilterName(string name)
        {
            if (name.Contains("%"))
            {
                this.Contacts = this.Contacts.Where(x => EF.Functions.Like(x.Name, name));
            }
            else
            {
                this.Contacts = this.Contacts.Where(x => x.Name == name);
            }
        }

        public void FilterGender(string gender)
        {
            this.Contacts = this.Contacts.Where(x => x.Gender == gender);
        }

        public void FilterAddress(string address)
        {
            this.Contacts = this.Contacts.Where(x => x.Address.Contains(address));
        }

        public void FilterBirthday(string from, string to, bool isFromFilled, bool isToFilled)
        {
            if (isFromFilled)
            {
                this.Contacts = this.Contacts.Where(x => x.Birthday.CompareTo(from) > 0);
            }

            if (isToFilled)
            {
                this.Contacts = this.Contacts.Where(x => x.Birthday.CompareTo(to) < 0);
            }
        }

        public void FilterPhone(string phone)
        {
            this.Contacts = this.Contacts.Where(x => phone == x.Tel ||
                                                     phone == x.Mobile);
        }

        private IList<Contact> GetResult()
        {
            var paging = this.Conditions.Paging;
            int from = paging.Page * paging.PageSize;
            int size = paging.PageSize;

            return this.Contacts.Skip(from).Take(size).ToList();
        }

        private void SetPagingResult(ContactResultSet result, int count)
        {
            int pages = this.CalculatePages(count, this.Conditions.Paging.PageSize);

            result.Paging = new Paging
            {
                Page = this.Conditions.Paging.Page,
                Pages = pages,
                PageSize = this.Conditions.Paging.PageSize,
            };
        }
    }
}