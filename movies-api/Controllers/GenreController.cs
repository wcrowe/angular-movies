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
        public async Task<ActionResult<List<Genre>>> Get()
        {
            return await _repository.GetAllGenresAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Genre>> Get(int id)  { 
            var genre = await _repository.GetGenreByIdAsync(id);

            if (genre == null){
                return NotFound("Sorry, Genre was not found");
            }
            return Ok(genre);
        }

    [HttpPost]
        public ActionResult Post([FromBody] Genre genre){
            return NoContent();
        }

        [HttpPut]
        public void Put(){

        }

        [HttpDelete]
        public void Delete(){

        }



    }
}
