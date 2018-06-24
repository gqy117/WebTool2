namespace WebTool2.Models
{
    public class Paging : IPaging
    {
        public int PageSize { get; set; }

        public int Page { get; set; }

        public int Pages { get; set; }
    }
}