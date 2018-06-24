namespace WebTool2.Services
{
    using System.Collections.Generic;
    using WebTool2.Models;
    using WebTool2.Repository;

    public class ContactService
    {
        public ContactService(IContactRepository repository)
        {
            this.Repository = repository;
        }

        private IContactRepository Repository { get; set; }

        private ContactQuery Conditions { get; set; }

        public ContactResultSet GetContacts(ContactQuery query)
        {
            ContactResultSet resultSet = new ContactResultSet
            {
                Contacts = new List<Contact>(),
            };

            this.Conditions = query;

            if (this.IsQueryReady())
            {
                this.Repository.Conditions = this.Conditions;

                this.FilterName();
                this.FilterGender();
                this.FilterAddress();
                this.FilterBirthday();
                this.FilterPhone();

                resultSet = this.Repository.Search();
            }

            return resultSet;
        }

        private bool IsQueryReady()
        {
            return this.IsNameFilled()
                || this.IsPhoneFilled();
        }

        private void FilterName()
        {
            if (!this.IsNameFilled())
            {
                return;
            }

            this.Repository.FilterName(this.Conditions.Name);
        }

        private void FilterGender()
        {
            if (this.Conditions.Gender == Gender.All)
            {
                return;
            }

            this.Repository.FilterGender(this.Conditions.Gender.ToString());
        }

        private void FilterAddress()
        {
            if (!this.IsAddressFilled())
            {
                return;
            }

            this.Repository.FilterAddress(this.Conditions.Address);
        }

        private void FilterBirthday()
        {
            if (!this.IsBirthdayFilled())
            {
                return;
            }

            this.Repository.FilterBirthday(
                this.Conditions.BirthdayFrom,
                this.Conditions.BirthdayTo,
                this.IsBirthdayFromFilled(),
                this.IsBirthdayToFilled());
        }

        private void FilterPhone()
        {
            if (this.IsPhoneFilled())
            {
                string phone = this.Conditions.Phone.Replace(" ", string.Empty);

                this.Repository.FilterPhone(phone);
            }
        }

        private bool IsAddressFilled()
        {
            return !string.IsNullOrWhiteSpace(this.Conditions.Address);
        }

        private bool IsBirthdayFilled()
        {
            return this.IsBirthdayFromFilled() || this.IsBirthdayToFilled();
        }

        private bool IsBirthdayFromFilled()
        {
            return !string.IsNullOrWhiteSpace(this.Conditions.BirthdayFrom);
        }

        private bool IsBirthdayToFilled()
        {
            return !string.IsNullOrWhiteSpace(this.Conditions.BirthdayTo);
        }

        private bool IsPhoneFilled()
        {
            return !string.IsNullOrWhiteSpace(this.Conditions.Phone);
        }

        private bool IsNameFilled()
        {
            return !string.IsNullOrWhiteSpace(this.Conditions.Name);
        }
    }
}
