using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using foodApp.Data;
using foodApp.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace foodApp.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Produces("application/json")]
    public class RecipesController : ControllerBase
    {
        private readonly IFoodRepository _repository;
        private readonly ILogger<RecipesController> _logger;
        public RecipesController( IFoodRepository repository, ILogger<RecipesController> logger )
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Recipe>> Get()
        {
            try
            {
                return Ok(_repository.GetAllRecipes());
            }
            catch( Exception ex )
            {
                _logger.LogError($"Failed to get recipes: {ex}");
                return BadRequest("Failed to get recipes.");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Recipe model)
        {
            try
            {
                _repository.AddEntity(model);
                if( _repository.SaveAll() )
                {
                    return Created($"/api/orders/{model.Id}", model);
                }
            }
            catch( Exception ex )
            {
                _logger.LogError($"Failed to save a new order: {ex}");
            }

            return BadRequest("Failed to save new recipe.");
        }
    }
}
