using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace foodApp.Data.Entities
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Amount { get; set; }
    }
}
