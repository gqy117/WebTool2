using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebTool2.Models;
using WebTool2.Repository;
using WebTool2.Services;

namespace WebTool2
{
    public static class DependencyOptionsExtensions
    {
        public static void ConfigureDependency(this IServiceCollection services, IConfiguration configuration)
        {
            ConfigDbContext(services, configuration);
            services.AddTransient<ServiceDependencyDTO>();
            services.AddTransient<ContactService>();
        }

        private static void ConfigDbContext(IServiceCollection services, IConfiguration configuration)
        {
            string connectionString = configuration.GetSection("Connection").Value;
            services.AddDbContext<ContactContext>(options => options.UseSqlite(connectionString));
        }
    }
}
