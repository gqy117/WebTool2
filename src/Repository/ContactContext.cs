using System;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Repository
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
