using Bar_B_iQ.Data;
using Bar_B_iQ.Models;
using System.Linq;

namespace Bar_B_iQ.Repositories
{
    public class UserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public User GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.User
                .FirstOrDefault(u => u.FirebaseUserId == firebaseUserId);
        }

        public void Add(User user)
        {
            _context.Add(user);
            _context.SaveChanges();
        }

    }
}
