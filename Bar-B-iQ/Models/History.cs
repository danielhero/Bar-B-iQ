using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bar_B_iQ.Models
{
    public class History
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int DonenessId { get; set; }
        public Doneness Doneness { get; set; }
        public DateTime DateCooked { get; set; }
        public string Comment { get; set; }
    }
}
