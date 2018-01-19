using System;
using System.Collections.Generic;
using System.Text;
using WebTool2.Models;
using WebTool2.Repository;

namespace WebTool2.Services
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
