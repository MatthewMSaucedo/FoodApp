using System.Collections.Generic;
using foodApp.Data.Entities;

namespace foodApp.Data
{
    public interface IFoodRepository
    {
        IEnumerable<Recipe> GetAllProducts();\
        bool SaveAll()
    }
}
