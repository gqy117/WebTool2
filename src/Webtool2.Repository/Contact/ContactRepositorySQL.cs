namespace WebTool2.Repository
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Nest;
    using WebTool2.Models;

    public class ContactRepositorySQL : IContactRepository
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

            result.Contacts = this.Contacts.ToList();
            result.Paging = new Paging
            {
                Page = this.Conditions.Paging.Page,
                Pages = result.Contacts.Count / this.Conditions.Paging.PageSize,
                PageSize = this.Conditions.Paging.PageSize,
            };

            return result;
        }

        public void FilterName(string name)
        {
            if (name.Contains("%"))
            {
                this.Contacts = this.Contacts.Where(x => x.Name.Contains(name));
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
    }
}