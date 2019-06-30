using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using foodApp.Data.Entities;


namespace foodApp.Data
{
    public class FoodContext : DbContext
    {
        public FoodContext( DbContextOptions<FoodContext> options ): base(options)
        { }

        public DbSet<Recipe> Recipes { get; set; }

    }
}
