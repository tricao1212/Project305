using Project305.Domain.Models;

namespace Project305.Business.AccountService
{
    public interface IAccountService
    {
        Task<Result<IEnumerable<Account>>> GetAll();
        Task<Result<Account>> GetById(int Id);
        Task<Result<Account>> CreateAsync(Account account);
        Task<Result<Account>> UpdateAsync(Account account);
        Task<Result<Account>> DeleteAsync(int Id);
        Task<Result<Account>> Auth(String Email, String Password);
    }
}
