using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Core.Types;
using Project305.Data_Access.GenericRepo;
using Project305.Domain.Models;
using System.Linq;

namespace Project305.Data_Access.Repositories
{
    public class AccountRepo : Repository<Account>, IAccountRepo
    {
        public AccountRepo(DbContext _dbcontext) : base(_dbcontext) { }

        public async Task<Account> Auth(string Email)
        {
            return await _dbSet.FirstAsync(x => x.Email == Email);
        }
    }
}
