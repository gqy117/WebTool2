using System;
using System.Collections.Generic;
using System.Linq;
using Models;
using Repository;

namespace Services
{
    public class ContactService : ServiceBase
    {
        private IQueryable<Contact> Contacts;
        private ContactQuery Query;

        public ContactService(ServiceDependencyDTO dependencies) : base(dependencies)
        {
        }

        public IList<Contact> GetContacts(ContactQuery query)
        {
            IList<Contact> result = new List<Contact>();

            if (!string.IsNullOrWhiteSpace(query.Name))
            {
                this.Query = query;
                this.Contacts = this.Context.Contacts;

                this.FilterName();
                this.FilterGender();
                this.FilterAddress();
                this.FilterBirthday();

                result = this.Contacts.ToList();
            }

            return result;
        }

        private void FilterName()
        {
            if (this.Query.Name.Contains("%"))
            {
                string name = this.Query.Name.Replace("%", string.Empty);
                this.Contacts = Contacts.Where(x => x.Name.Contains(name));
            }
            else
            {
                this.Contacts = Contacts.Where(x => x.Name == this.Query.Name);
            }
        }

        private void FilterGender()
        {
            if (this.Query.Gender == Gender.All)
                return;

            this.Contacts = this.Contacts.Where(x => x.Gender == this.Query.Gender.ToString());
        }

        private void FilterAddress()
        {
            if (string.IsNullOrWhiteSpace(this.Query.Address))
                return;

            this.Contacts = this.Contacts.Where(x => x.Address.Contains(this.Query.Address));
        }

        private void FilterBirthday()
        {
            if (!string.IsNullOrWhiteSpace(this.Query.BirthdayFrom))
            {
                this.Contacts = this.Contacts.Where(x => x.Birthday.CompareTo(this.Query.BirthdayFrom) > 0);
            }

            if (!string.IsNullOrWhiteSpace(this.Query.BirthdayTo))
            {
                this.Contacts = this.Contacts.Where(x => x.Birthday.CompareTo(this.Query.BirthdayTo) < 0);
            }
        }
    }
}
