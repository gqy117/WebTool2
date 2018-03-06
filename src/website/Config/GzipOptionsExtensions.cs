namespace WebTool2
{
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.ResponseCompression;
    using Microsoft.Extensions.DependencyInjection;

    public static class GzipOptionsExtensions
    {
        public static void ConfigureGzip(this IServiceCollection services)
        {
            services.AddResponseCompression(options =>
            {
                options.EnableForHttps = true;

                options.MimeTypes = new[]
                {
                    "text/css",
                    "application/javascript",
                    "application/json",
                    "image/svg+xml",
                };
            });

            services.Configure<GzipCompressionProviderOptions>(options =>
                options.Level = System.IO.Compression.CompressionLevel.Optimal);
        }
    }
}
