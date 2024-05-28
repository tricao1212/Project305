using Project305.Data_Access.UnitOfWorks;
using Project305.Domain.Models;

namespace Project305.Business
{
    public class BaseService
    {
        protected readonly IUnitOfWork _unitOfWork;

        public BaseService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        public Result<T> Success<T>(T data) where T : class
        {
            return new Result<T>
            {
                Data = data,
                IsSuccess = true
            };
        }

        public Result<T> Fail<T>(string message) where T : class
        {
            return new Result<T>
            {
                Message = message,
                IsSuccess = false
            };
        }
    }
}
