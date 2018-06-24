namespace WebTool2.Models
{
    public interface IPaging
    {
        int PageSize { get; set; }

        int Page { get; set; }
    }
}
