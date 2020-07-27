using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bar_B_iQ.Models
{
    public class Cut
    {
        public int Id { get; set; }
        public string CutType { get; set; }
        public string Weight { get; set; }
        public string Image { get; set; }
        public int AnimalId { get; set; }
        public Animal Animal { get; set; }
    }
}
