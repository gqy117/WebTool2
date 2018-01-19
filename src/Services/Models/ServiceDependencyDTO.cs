using System;
using System.Collections.Generic;
using System.Text;
using Repository;

namespace Models
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
