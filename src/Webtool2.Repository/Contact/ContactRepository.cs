namespace WebTool2.Repository
{
    using System;

    public abstract class ContactRepository
    {
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
