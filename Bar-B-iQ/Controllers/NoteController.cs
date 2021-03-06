﻿using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Bar_B_iQ.Data;
using Bar_B_iQ.Models;
using Bar_B_iQ.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Bar_B_iQ.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly NoteRepository _noteRepository;
        private readonly UserRepository _userRepository;

        public NoteController(ApplicationDbContext context)
        {
            _noteRepository = new NoteRepository(context);
            _userRepository = new UserRepository(context);
        }

        private User GetCurrentUser()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepository.GetByFirebaseUserId(firebaseUserId);
        }

        [HttpGet("getByUser/")]
        public IActionResult GetNotesByUser()
        {
            var currentUser = GetCurrentUser();
            var id = currentUser.Id;

            return Ok(_noteRepository.GetNotesByUser(id));
        }


        [HttpPost]
        public IActionResult Note(Note note)
        {
            var currentUser = GetCurrentUser();
            
            note.UserId = currentUser.Id;
            _noteRepository.Add(note);
            return CreatedAtAction(nameof(GetNotesByUser), new { id = note.Id }, note);
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
