namespace WebTool2.Services
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using WebTool2.Models;
    using WebTool2.Repository;

    public abstract class ServiceBase
    {
        public ServiceBase(ServiceDependencyDTO dependencies)
        {
            this.Dependencies = dependencies;
        }

        public ServiceDependencyDTO Dependencies { get; set; }

        public ContactContext Context => this.Dependencies.Context;
    }
}
