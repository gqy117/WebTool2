using System;
using System.Collections.Generic;
using System.Text;
using WebTool2.Repository;

namespace WebTool2.Models
{
    public class ServiceDependencyDTO
    {
        public readonly ContactContext Context;

        public ServiceDependencyDTO(ContactContext context)
        {
            this.Context = context;
        }
    }
}
