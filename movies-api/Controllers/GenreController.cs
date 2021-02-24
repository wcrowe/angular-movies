using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using movies_api.Services;
using movies_api.Entities;

namespace movies_api.Controllers
{
    [ApiController]
    [Route("api/genres")]
    public class GenreController : ControllerBase
    {


        private readonly ILogger<GenreController> _logger;
        private readonly IRepository _repository;


        public GenreController(ILogger<GenreController> logger, IRepository repository)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet]
        [HttpGet("list")]
        [HttpGet("/allgenres")]
        public async Task<ActionResult<List<Genres>>> Get()
        {
            return await _repository.GetAllGenresAsync();
        }

        [HttpGet("{id}")]
        public ActionResult<Genres> Get(int id)  { 
            var genre = _repository.GetGenreById(id);

            if (genre == null){
                return NotFound("Sorry, Genre was not found");
            }
            return Ok(genre);
        }

    [HttpPost]
        public void Post(){

        }

        [HttpPut]
        public void Put(){

        }

        [HttpDelete]
        public void Delete(){

        }



    }
}
