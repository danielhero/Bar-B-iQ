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
    public class DonenessController : ControllerBase
    {
        private readonly DonenessRepository _donenessRepository;
        public DonenessController(ApplicationDbContext context)
        {
            _donenessRepository = new DonenessRepository(context);
        }

        [HttpGet("getByCut/{id}")]
        public IActionResult GetDonenessByCutId(int id)
        {
            return Ok(_donenessRepository.GetDonenessByCutId(id));
        }

        [HttpGet("{Id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_donenessRepository.GetById(id));
        }
    }
}
