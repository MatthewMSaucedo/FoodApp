using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using foodApp.Data.Entities;


namespace FoodAppContext.Data
{
    public class FoodContext : DbContext
    {
        public FoodContext( DbContextOptions<FoodContext> options ): base(options)
        { }

        public DbSet<Recipe> Recipe { get; set; }

    }
}
