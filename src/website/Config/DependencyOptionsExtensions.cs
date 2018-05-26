namespace WebTool2
{
    using System;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Models;
    using Nest;
    using Repository;
    using Services;

    public static class DependencyOptionsExtensions
    {
        public static void ConfigureDependency(this IServiceCollection services, IConfiguration configuration)
        {
            ConfigDbContext(services, configuration);
            ConfigElasticClient(services, configuration);

            services.AddTransient<ServiceDependencyDTO>();
            services.AddTransient<IContactRepository, ContactRepositorySQL>();
            services.AddTransient<ContactService>();
        }

        private static void ConfigElasticClient(IServiceCollection services, IConfiguration configuration)
        {
            string url = configuration.GetSection("ElasticSearch").Value;

            var settings = new ConnectionSettings(new Uri(url))
                .DefaultIndex("contacts");

            var client = new ElasticClient(settings);

            services.AddSingleton(client);
        }

        private static void ConfigDbContext(IServiceCollection services, IConfiguration configuration)
        {
            string connectionString = configuration.GetSection("Connection").Value;
            services.AddDbContext<ContactContext>(options => options.UseSqlite(connectionString));
        }
    }
}
