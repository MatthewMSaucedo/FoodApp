using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace foodApp.Data.Entities
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public ICollection<Ingredient> Ingredients { get; set; }
    }
}
