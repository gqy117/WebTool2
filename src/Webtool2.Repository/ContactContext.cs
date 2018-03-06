namespace WebTool2.Repository
{
    using System;
    using Microsoft.EntityFrameworkCore;
    using WebTool2.Models;

    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options)
            : base(options)
        {
        }

        public DbSet<Contact> Contacts { get; set; }
    }
}
