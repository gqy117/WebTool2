using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;
using Repository;
using Services;

namespace AdvancedPeopleDashboard.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly ContactService ContactService;

        public ContactsController(ContactService contactService)
        {
            this.ContactService = contactService;
        }

        [HttpGet("[action]")]
        public IList<Contact> Index(ContactQuery query)
        {
            return this.ContactService.GetContacts(query);
        }
    }
}
