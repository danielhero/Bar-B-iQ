﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bar_B_iQ.Data;
using Bar_B_iQ.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bar_B_iQ.Repositories
{
    public class AnimalRepository
    {
        private readonly ApplicationDbContext _context;

        public AnimalRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Animal> GetAll()
        {
            return _context.Animal.ToList();
        }

        public Animal GetAnimalById(int id)
        {
            return _context.Animal
                            .FirstOrDefault(a => a.Id == id);
        }

    }
}

