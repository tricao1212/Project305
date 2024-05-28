using Project305.Data_Access.UnitOfWorks;
using Project305.Domain.Models;

namespace Project305.Business.AccountService
{
    public class AccountService : BaseService, IAccountService
    {
        public AccountService(IUnitOfWork _unitOfWork) : base(_unitOfWork)
        {
            
        }
        public async Task<Result<Account>> CreateAsync(Account account)
        {
            try
            {
                var res = await _unitOfWork.Account.CreateEntity(account);

                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<Account>(ex.Message);
            }
        }

        public Task<Result<Account>> DeleteAsync(Account account)
        {
            throw new NotImplementedException();
        }

        public async Task<Result<IEnumerable<Account>>> GetAll()
        {
            try
            {
                var account = await _unitOfWork.Account.GetAll();

                return Success(account);
            }
            catch (Exception ex)
            {
                return Fail<IEnumerable<Account>>(ex.Message);
            }
        }

        public async Task<Result<Account>> GetById(int Id)
        {
            try
            {
                var account = await _unitOfWork.Account.GetById(Id);

                return Success(account);
            }
            catch (Exception ex)
            {
                return Fail<Account>(ex.Message);
            }
        }

        public Task<Result<Account>> UpdateAsync(Account account)
        {
            throw new NotImplementedException();
        }
    }
}
