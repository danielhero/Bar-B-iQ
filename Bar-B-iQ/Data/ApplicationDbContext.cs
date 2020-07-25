using Microsoft.EntityFrameworkCore;
using Bar_B_iQ.Models;

namespace Bar_B_iQ.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Animal> Animal { get; set; }
        public DbSet<Cut> Cut { get; set; }
        public DbSet<Doneness> Doneness { get; set; }
        public DbSet<History> History { get; set; }
        public DbSet<Note> Note { get; set; }
        public DbSet<Tip> Tip { get; set; }
        public DbSet<User> User { get; set; }
    }
}
