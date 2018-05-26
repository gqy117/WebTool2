namespace WebTool2.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using WebTool2.Models;

    public class ContactService : ServiceBase
    {
        public ContactService(ServiceDependencyDTO dependencies)
            : base(dependencies)
        {
        }

        private IQueryable<Contact> Contacts { get; set; }

        private ContactQuery Query { get; set; }

        public IList<Contact> GetContacts(ContactQuery query)
        {
            IList<Contact> result = new List<Contact>();
            this.Query = query;
            this.Contacts = this.Context.Contacts;

            if (this.IsQueryReady(query))
            {
                this.FilterName();
                this.FilterGender();
                this.FilterAddress();
                this.FilterBirthday();
                this.FilterPhone();

                result = this.Contacts.ToList();
            }

            return result;
        }

        private bool IsQueryReady(ContactQuery query)
        {
            return this.IsNameFilled()
                || this.IsPhoneFilled();
        }

        private void FilterName()
        {
            if (!this.IsNameFilled())
                return;

            if (this.Query.Name.Contains("%"))
            {
                string name = this.Query.Name.Replace("%", string.Empty);
                this.Contacts = this.Contacts.Where(x => x.Name.Contains(name));
            }
            else
            {
                this.Contacts = this.Contacts.Where(x => x.Name == this.Query.Name);
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
            if (!this.IsAddressFilled())
                return;

            this.Contacts = this.Contacts.Where(x => x.Address.Contains(this.Query.Address));
        }

        private void FilterBirthday()
        {
            if (this.IsBirthdayFromFilled())
            {
                this.Contacts = this.Contacts.Where(x => x.Birthday.CompareTo(this.Query.BirthdayFrom) > 0);
            }

            if (this.IsBirthdayToFilled())
            {
                this.Contacts = this.Contacts.Where(x => x.Birthday.CompareTo(this.Query.BirthdayTo) < 0);
            }
        }

        private void FilterPhone()
        {
            if (this.IsPhoneFilled())
            {
                string phone = this.Query.Phone.Replace(" ", string.Empty);

                this.Contacts = this.Contacts.Where(x => this.Query.Phone == x.Tel ||
                                                         this.Query.Phone == x.Mobile);
            }
        }

        private bool IsAddressFilled()
        {
            return !string.IsNullOrWhiteSpace(this.Query.Address);
        }

        private bool IsBirthdayFromFilled()
        {
            return !string.IsNullOrWhiteSpace(this.Query.BirthdayFrom);
        }

        private bool IsBirthdayToFilled()
        {
            return !string.IsNullOrWhiteSpace(this.Query.BirthdayTo);
        }

        private bool IsPhoneFilled()
        {
            return !string.IsNullOrWhiteSpace(this.Query.Phone);
        }

        private bool IsNameFilled()
        {
            return !string.IsNullOrWhiteSpace(this.Query.Name);
        }
    }
}
