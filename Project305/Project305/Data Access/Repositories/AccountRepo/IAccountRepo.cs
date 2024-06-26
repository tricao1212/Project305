﻿using Project305.Data_Access.GenericRepo;
using Project305.Domain.Models;

namespace Project305.Data_Access.Repositories
{
    public interface IAccountRepo : IRepository<Account>
    {
        Task<Account> Auth(String Email);
    }
}
