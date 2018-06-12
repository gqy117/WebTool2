namespace WebTool2
{
    using System;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Models;
    using Nest;
    using Repository;
    using Services;

    public static class DependencyOptionsExtensions
    {
        public static void ConfigureDependency(this IServiceCollection services, IConfiguration configuration, IHostingEnvironment environment)
        {
            ConfigDbContext(services, configuration);
            ConfigElasticClient(services, configuration, environment);

            services.AddTransient<ServiceDependencyDTO>();
            services.AddTransient<IContactRepository, ContactRepositoryElasticSearch>();
            services.AddTransient<ContactService>();
        }

        private static void ConfigElasticClient(IServiceCollection services, IConfiguration configuration, IHostingEnvironment environment)
        {
            string url = configuration.GetSection("ElasticSearch").Value;

            var settings = new ConnectionSettings(new Uri(url))
                .DefaultIndex("contacts");

            if (environment.IsDevelopment())
            {
                settings.DisableDirectStreaming();
            }

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
