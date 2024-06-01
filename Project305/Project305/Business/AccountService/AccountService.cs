using Project305.Data_Access.UnitOfWorks;
using Project305.Domain.Models;

namespace Project305.Business.AccountService
{
    public class AccountService : BaseService, IAccountService
    {
        public AccountService(IUnitOfWork _unitOfWork) : base(_unitOfWork)
        {

        }

        public async Task<Result<Account>> Auth(string Email, string Password)
        {
            try
            {
                var res = await _unitOfWork.Account.Auth(Email);
                if (res != null)
                {
                    if (res.Password == Password)
                    {
                        return Success(res);
                    }
                }
                return Fail<Account>("Email or Password is not correct !");
            }
            catch (Exception ex)
            {
                return Fail<Account>(ex.Message);
            }
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

        public async Task<Result<Account>> DeleteAsync(int Id)
        {
            try
            {
                var acc = await _unitOfWork.Account.GetById(Id);
                await _unitOfWork.Account.DeleteEntity(Id);
                return Success(acc);
            }
            catch (Exception ex)
            {
                return Fail<Account>(ex.Message);
            }
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
