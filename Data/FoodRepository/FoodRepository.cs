using foodApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace foodApp.Data
{
    public class FoodRepository : IFoodRepository
    {
        private readonly FoodContext _context;

        public FoodRepository(FoodContext context)
        {
            _context = context;
        }

        public void AddEntity(object model)
        {
            _context.Add(model);
        }

        public IEnumerable<Recipe> GetAllRecipes()
        {
            return _context.Recipes
                .OrderBy(recipe => recipe.Name)
                .ToList();
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
