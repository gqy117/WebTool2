using System;
using Microsoft.EntityFrameworkCore;
using WebTool2.Models;

namespace WebTool2.Repository
{
    public class ContactContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        public ContactContext(DbContextOptions<ContactContext> options)
            : base(options)
        {
        }
    }
}
