using Bar_B_iQ.Data;
using Bar_B_iQ.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bar_B_iQ.Repositories
{
    public class CutRepository
    {
        private readonly ApplicationDbContext _context;

        public CutRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Cut> GetCutsByAnimalId(int id)
        {
            return _context.Cut.Include(c => c.Animal)
                               .Where(c => c.AnimalId == id)
                               .ToList();
        }

        public Cut GetById(int id)
        {
            return _context.Cut.FirstOrDefault(c => c.Id == id);
        }

    }
}
