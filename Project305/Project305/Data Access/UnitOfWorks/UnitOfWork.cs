using Microsoft.EntityFrameworkCore;
using Project305.Data_Access.Repositories;
using Project305.Domain.Data;

namespace Project305.Data_Access.UnitOfWorks
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext _context;
        public UnitOfWork(Project305Context context)
        {
            _context = context;

        }
        private AccountRepo AccountRepo;
        public IAccountRepo Account
        {
            get
            {
                return AccountRepo ??= new(_context);
            }
        }
    }
}
