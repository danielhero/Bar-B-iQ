using Bar_B_iQ.Data;
using Bar_B_iQ.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bar_B_iQ.Repositories
{
    public class DonenessRepository
    {
        private readonly ApplicationDbContext _context;

        public DonenessRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Doneness> GetDonenessByCutId(int id)
        {
            return _context.Doneness.Include(d => d.Cut)
                               .Where(d => d.CutId == id)
                               .ToList();
        }

        public Doneness GetById(int id)
        {
            return _context.Doneness.FirstOrDefault(d => d.Id == id);
        }

    }
}
