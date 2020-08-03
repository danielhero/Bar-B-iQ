using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Bar_B_iQ.Data;
using Bar_B_iQ.Models;
using Bar_B_iQ.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bar_B_iQ.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryController : ControllerBase
    {
        private readonly HistoryRepository _historyRepository;
        private readonly UserRepository _userRepository;

        public HistoryController(ApplicationDbContext context)
        {
            _historyRepository = new HistoryRepository(context);
            _userRepository = new UserRepository(context);
        }

        private User GetCurrentUser()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepository.GetByFirebaseUserId(firebaseUserId);
        }

        [HttpGet("getByUser/")]
        public IActionResult GetHistoryByUser()
        {
            var currentUser = GetCurrentUser();
            var id = currentUser.Id;

            return Ok(_historyRepository.GetHistoryByUser(id));
        }

        [HttpPost]
        public IActionResult History(History history)
        {
            var currentUser = GetCurrentUser();

            history.UserId = currentUser.Id;
            _historyRepository.Add(history);
            return CreatedAtAction(nameof(GetHistoryByUser), new { id = history.Id }, history);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, History history)
        {
            if (id != history.Id)
            {
                return BadRequest();
            }

            _historyRepository.Update(history);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _historyRepository.Delete(id);
            return NoContent();
        }

        
    }
}

