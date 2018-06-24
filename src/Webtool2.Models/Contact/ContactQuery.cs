namespace WebTool2.Models
{
    public class ContactQuery : IPaging
    {
        public string Name { get; set; }

        public Gender Gender { get; set; }

        public string Address { get; set; }

        public string BirthdayFrom { get; set; }

        public string BirthdayTo { get; set; }

        public string Phone { get; set; }

        public int PageSize { get; set; }

        public int Page { get; set; }
    }
}
