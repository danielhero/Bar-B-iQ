using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bar_B_iQ.Data;
using Bar_B_iQ.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bar_B_iQ.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalController : ControllerBase
    {
        private readonly AnimalRepository _animalRepository;

        public AnimalController(ApplicationDbContext context)
        {
            _animalRepository = new AnimalRepository(context);
        }

        [HttpGet]
        public IActionResult GetAllAnimals()
        {
            return Ok(_animalRepository.GetAll());
        }

        [HttpGet("{Id}")]
        public IActionResult GetAnimalById(int Id)
        {
            return Ok(_animalRepository.GetAnimalById(Id));
        }
    }
}
