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
        private readonly ContactService contactService;

        public ContactsController(ContactService contactService)
        {
            this.contactService = contactService;
        }

        [HttpPost]
        public ContactResultSet Index(ContactQuery query)
        {
            return this.contactService.GetContacts(query);
        }
    }
}
