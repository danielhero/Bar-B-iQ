using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bar_B_iQ.Data;
using Bar_B_iQ.Models;
using Bar_B_iQ.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bar_B_iQ.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly NoteRepository _noteRepository;

        public NoteController(ApplicationDbContext context)
        {
            _noteRepository = new NoteRepository(context);
        }

        [HttpGet("getByUser/{id}")]
        public IActionResult GetNotesByUserId(int id)
        {
            return Ok(_noteRepository.GetNotesByUserId(id));
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_noteRepository.GetById(id));
        }

        [HttpPost]
        public IActionResult Note(Note note)
        {
            _noteRepository.AddNote(note);
            return CreatedAtAction("Get", new { id = note.Id }, note);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _noteRepository.Delete(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Note note)
        {
            if (id != note.Id)
            {
                return BadRequest();
            }

            _noteRepository.Update(note);
            return NoContent();
        }
    }
}
