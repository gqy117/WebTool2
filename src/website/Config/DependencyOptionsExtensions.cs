namespace WebTool2
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Models;
    using Repository;
    using Services;

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
