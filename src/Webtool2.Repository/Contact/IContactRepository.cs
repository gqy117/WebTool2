namespace WebTool2.Repository
{
    using System.Collections.Generic;
    using WebTool2.Models;

    public interface IContactRepository
    {
        ContactQuery Conditions { get; set; }

        ContactResultSet Search();

        void FilterName(string name);

        void FilterGender(string gender);

        void FilterAddress(string address);

        void FilterBirthday(string from, string to, bool isFromFilled, bool isToFilled);

        void FilterPhone(string phone);
    }
}