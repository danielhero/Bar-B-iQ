using Bar_B_iQ.Data;
using Bar_B_iQ.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bar_B_iQ.Repositories
{
    public class HistoryRepository
    {
        
        private readonly ApplicationDbContext _context;

        public HistoryRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<History> GetHistoryByUser(int id)
        {
            return _context.History
                            .Include(h => h.User)
                            .Include(h => h.Doneness)
                            .ThenInclude(d => d.Cut)
                            .ThenInclude(c =>c.Animal)
                            .Where(h => h.UserId == id)
                            .OrderByDescending(h => h.DateCooked)
                            .ToList();
        }

        public History GetById(int id)
        {
            return _context.History
                            .Include(h => h.User)
                            .FirstOrDefault(h => h.Id == id);
        }

        public void Add(History history)
        {
            _context.Add(history);
            _context.SaveChanges();
        }


        public void Delete(int id)
        {
            var history = GetById(id);
            _context.History.Remove(history);
            _context.SaveChanges();
        }

    }
}

