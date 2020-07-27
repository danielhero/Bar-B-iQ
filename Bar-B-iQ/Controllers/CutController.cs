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
    public class CutController : ControllerBase
    {
        private readonly CutRepository _cutRepository;
        public CutController(ApplicationDbContext context)
        {
            _cutRepository = new CutRepository(context);
        }

        [HttpGet("getByAnimal/{id}")]
        public IActionResult GetCutsByAnimalId(int id)
        {
            return Ok(_cutRepository.GetCutsByAnimalId(id));
        }
    }
}
