using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Core.Types;
using Project305.Data_Access.GenericRepo;
using Project305.Domain.Models;

namespace Project305.Data_Access.Repositories
{
    public class AccountRepo : Repository<Account>, IAccountRepo
    {
        public AccountRepo(DbContext _dbcontext) : base(_dbcontext) { }
    }
}
