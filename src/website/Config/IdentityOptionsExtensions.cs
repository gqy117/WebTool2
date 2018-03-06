namespace WebTool2
{
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Services;

    public static class IdentityOptionsExtensions
    {
        public static void ConfigureIdentity(this IServiceCollection services, IConfiguration configuration)
        {
            string connectionString = configuration.GetSection("Identity").Value;

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlite(connectionString));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddTransient<IEmailSender, EmailSender>();
        }
    }
}
