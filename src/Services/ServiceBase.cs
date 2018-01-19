using System;
using System.Collections.Generic;
using System.Text;
using Models;
using Repository;

namespace Services
{
    public abstract class ServiceBase
    {
        public ServiceDependencyDTO Dependencies;

        public ContactContext Context => Dependencies.Context;

        public ServiceBase(ServiceDependencyDTO dependencies)
        {
            this.Dependencies = dependencies;
        }
    }
}
