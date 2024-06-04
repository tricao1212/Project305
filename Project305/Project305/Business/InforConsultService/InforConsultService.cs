using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using Project305.Data_Access.UnitOfWorks;
using Project305.Domain.Models;

namespace Project305.Business.InforConsultService
{
    public class InforConsultService : BaseService, IInforConsultService
    {
        public InforConsultService(IUnitOfWork _unitOfWork) : base(_unitOfWork)
        {

        }
        public async Task<Result<InforConsult>> CreateAsync(InforConsult inforConsult)
        {
            var requestConsult = await _unitOfWork.RequestConsult.GetRequestByDoctorAndPatient(inforConsult.PatientId,inforConsult.DoctorId);
            try
            {
                var res = await _unitOfWork.InforConsult.CreateEntity(inforConsult);
                await _unitOfWork.RequestConsult.DeleteEntity(requestConsult.Id);
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<InforConsult>(ex.Message);
            }
        }

        public async Task<Result<InforConsult>> DeleteAsync(int Id)
        {
            try
            {
                var inf = await _unitOfWork.InforConsult.GetById(Id);
                await _unitOfWork.InforConsult.DeleteEntity(Id);
                return Success(inf);
            }
            catch (Exception ex)
            {
                return Fail<InforConsult>(ex.Message);
            }
        }

        public async Task<Result<IEnumerable<InforConsult>>> GetAll()
        {
            try
            {
                var res = await _unitOfWork.InforConsult.GetAll();
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<IEnumerable<InforConsult>>(ex.Message);
            }
        }

        public async Task<Result<IEnumerable<InforConsult>>> GetByIdDoctor(int Id)
        {
            try
            {
                var res = await _unitOfWork.InforConsult.GetByIdDoctor(Id);
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<IEnumerable<InforConsult>>(ex.Message);
            }
        }

        public async Task<Result<IEnumerable<InforConsult>>> GetByIdPatient(int Id)
        {
            try
            {
                var res = await _unitOfWork.InforConsult.GetByIdPatient(Id);
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<IEnumerable<InforConsult>>(ex.Message);
            }
        }

    }
}
