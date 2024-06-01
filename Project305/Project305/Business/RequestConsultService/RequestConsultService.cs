using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using Project305.Data_Access.UnitOfWorks;
using Project305.Domain.Models;

namespace Project305.Business.RequestConsultService
{
    public class RequestConsultService : BaseService, IRequestConsultService
    {
        public RequestConsultService(IUnitOfWork _unitOfWork) : base(_unitOfWork)
        {

        }
        public async Task<Result<RequestConsult>> CreateAsync(RequestConsult resquestConsult)
        {
            try
            {
                var res = await _unitOfWork.RequestConsult.CreateEntity(resquestConsult);
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<RequestConsult>(ex.Message);
            }
        }

        public async Task<Result<RequestConsult>> DeleteAsync(int Id)
        {
            try
            {
                var res = await _unitOfWork.RequestConsult.GetById(Id);
                await _unitOfWork.RequestConsult.DeleteEntity(Id);
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<RequestConsult>(ex.Message);
            }
        }

        public async Task<Result<IEnumerable<RequestConsult>>> GetAll()
        {
            try
            {
                var res = await _unitOfWork.RequestConsult.GetAll();
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<IEnumerable<RequestConsult>>(ex.Message);
            }
        }
        public async Task<Result<IEnumerable<RequestConsult>>> GetByIdDoctor(int Id)
        {
            try
            {
                var res = await _unitOfWork.RequestConsult.GetByIdDoctor(Id);
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<IEnumerable<RequestConsult>>(ex.Message);
            }
        }

        public async Task<Result<IEnumerable<RequestConsult>>> GetByIdPatient(int Id)
        {
            try
            {
                var res = await _unitOfWork.RequestConsult.GetByIdPatient(Id);
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<IEnumerable<RequestConsult>>(ex.Message);
            }
        }
    }
}
