using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using Project305.Data_Access.UnitOfWorks;
using Project305.Domain.Models;

namespace Project305.Business.PatientService
{
    public class PatientService : BaseService, IPatientService
    {
        public PatientService(IUnitOfWork _unitOfWork) : base(_unitOfWork)
        {

        }
        public async Task<Result<Patient>> CreateAsync(Patient patient)
        {
            try
            {
                var res = await _unitOfWork.Patient.CreateEntity(patient);
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<Patient>(ex.Message);
            }
        }

        public async Task<Result<Patient>> DeleteAsync(int Id)
        {
            try
            {
                var patient = await _unitOfWork.Patient.GetById(Id);
                await _unitOfWork.Patient.DeleteEntity(Id);
                return Success(patient);
            }
            catch (Exception ex)
            {
                return Fail<Patient>(ex.Message);
            }
        }

        public async Task<Result<IEnumerable<Patient>>> GetAll()
        {
            try
            {
                var res = await _unitOfWork.Patient.GetAllIncludePrefined();
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<IEnumerable<Patient>>(ex.Message);
            }
        }

        public async Task<Result<Patient>> GetById(int Id)
        {
            try
            {
                var res = await _unitOfWork.Patient.GetByIdIncludePrefined(Id);
                if (res != null)
                {
                    return Success(res);
                }
                return Fail<Patient>("Not found");
            }
            catch (Exception ex)
            {
                return Fail<Patient>(ex.Message);
            }
        }

    }
}
