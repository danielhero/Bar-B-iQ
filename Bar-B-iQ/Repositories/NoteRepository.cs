using Bar_B_iQ.Data;
using Bar_B_iQ.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bar_B_iQ.Repositories
{
    public class NoteRepository
    {
        private readonly ApplicationDbContext _context;

        public NoteRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Note> GetNotesByUser(int id)
        {
            return _context.Note.Include(n => n.User)
                                .Where(n => n.UserId == id)
                                .ToList();
        }

        public Note GetById(int id)
        {
            return _context.Note
                            .Include(n => n.User)
                            .FirstOrDefault(n => n.Id == id);
        }

        public void Add(Note note)
        {
            _context.Add(note);
            _context.SaveChanges();
        }

        public void Update(Note note)
        {
            _context.Entry(note).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var note = GetById(id);
            _context.Note.Remove(note);
            _context.SaveChanges();
        }

    }
}
