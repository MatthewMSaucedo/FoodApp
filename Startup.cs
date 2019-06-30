using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using foodApp.Data;

namespace foodApp
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup( IConfiguration config )
        {
            _config = config;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<FoodContext>(cfg =>
                cfg.UseSqlServer(
                    _config.GetConnectionString("DefaultDatabase")
                )
            );

            services.AddLogging();

            services.AddScoped<IFoodRepository, FoodRepository>();

            services.AddMvc()
                .SetCompatibilityVersion(Microsoft.AspNetCore.Mvc.CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            // Redirect any non-API calls to the Angular Application
            // so our application can handle the routing
            app.Use(async (context, next) => {
                await next();
                if (context.Response.StatusCode == 404 &&
                   !Path.HasExtension(context.Request.Path.Value) &&
                   !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            // Configures application for usage as API
            // with default route of '/api/[Controller]'
            app.UseMvcWithDefaultRoute();

            // Configures application to serve the index.html file from /wwwroot
            // when you access the server from a web browser
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
