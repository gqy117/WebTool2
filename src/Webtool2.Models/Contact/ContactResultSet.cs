namespace WebTool2.Models
{
    using System.Collections.Generic;

    public class ContactResultSet
    {
        public IList<Contact> Contacts { get; set; }

        public IPaging Paging { get; set; }
    }
}
