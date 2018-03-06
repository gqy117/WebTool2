namespace WebTool2.Models
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using WebTool2.Repository;

    public class ServiceDependencyDTO
    {
        public ServiceDependencyDTO(ContactContext context)
        {
            this.Context = context;
        }

        public ContactContext Context { get; set; }
    }
}
