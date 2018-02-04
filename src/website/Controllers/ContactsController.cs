using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebTool2.Models;
using WebTool2.Services;

namespace WebTool2.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly ContactService ContactService;

        public ContactsController(ContactService contactService)
        {
            this.ContactService = contactService;
        }

        [HttpGet]
        public IList<Contact> Index(ContactQuery query)
        {
            return this.ContactService.GetContacts(query);
        }
    }
}
