﻿namespace WebTool2.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.AspNetCore.Mvc;
    using WebTool2.Models;
    using WebTool2.Services;

    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly ContactServiceElasticSearch contactService;

        public ContactsController(ContactServiceElasticSearch contactService)
        {
            this.contactService = contactService;
        }

        [HttpGet]
        public IList<Contact> Index(ContactQuery query)
        {
            return this.contactService.GetContacts(query);
        }
    }
}
