using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Bar_B_iQ.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(15)]
        public string FirstName { get; set; }

        [Required]
        public int LastName { get; set; }

        [Required]
        [MaxLength(255)]
        public string Email { get; set; }
    
        [Required]
        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }
    }
}
