using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bar_B_iQ.Models
{
    public class Doneness
    {
        public int Id { get; set; }
        public string DonenessChoice { get; set; }
        public int CutId { get; set; }
        public Cut Cut { get; set; }
        public int CookTime { get; set; }
        public int Temperature { get; set; }

    }
}
