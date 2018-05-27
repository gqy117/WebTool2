﻿namespace WebTool2.Repository
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

        private IQueryable<Contact> Contacts { get; set; }

        private ContactContext Context { get; set; }

        public IList<Contact> Search()
        {
            var result = this.Contacts.ToList();

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