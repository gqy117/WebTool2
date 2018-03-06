namespace WebTool2
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.DependencyInjection;

    public static class MvcOptionsExtensions
    {
        public static void ConfigureMvc(this IServiceCollection services, IHostingEnvironment env)
        {
            services.AddMvc();

            if (env.IsProduction())
                RequireHttps(services);
        }

        private static void RequireHttps(IServiceCollection services)
        {
            services.Configure<MvcOptions>(options => { options.Filters.Add(new RequireHttpsAttribute()); });
        }
    }
}
