namespace WebTool2.Repository
{
    using System;

    public abstract class ContactRepository
    {
        public static int CalculatePage(int pages, int page)
        {
            int newPage = page > pages - 1 ? pages - 1 : page;

            return Math.Max(0, newPage);
        }

        protected int CalculatePages(int count, int pageSize)
        {
            return this.CalculatePages((long)count, pageSize);
        }

        protected int CalculatePages(long count, int pageSize)
        {
            return (int)Math.Ceiling((decimal)count / (decimal)pageSize);
        }
    }
}
