using Project305.Data_Access.UnitOfWorks;
using Project305.Domain.Models;

namespace Project305.Business.DoctorService
{
    public class DoctorService : BaseService, IDoctorService
    {
        public DoctorService(IUnitOfWork _unitOfWork) : base(_unitOfWork)
        {

        }
        public async Task<Result<Doctor>> CreateAsync(Doctor doctor)
        {
            try
            {
                var res = await _unitOfWork.Doctor.CreateEntity(doctor);
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<Doctor>(ex.Message);
            }
        }

        public async Task<Result<Doctor>> DeleteAsync(int Id)
        {
            try
            {
                var doctor = await _unitOfWork.Doctor.GetById(Id);
                await _unitOfWork.Doctor.DeleteEntity(Id);
                return Success(doctor);
            }
            catch (Exception ex)
            {
                return Fail<Doctor>(ex.Message);
            }
        }

        public async Task<Result<IEnumerable<Doctor>>> GetAll()
        {
            try
            {
                var res = await _unitOfWork.Doctor.GetAll();
                return Success(res);
            }
            catch (Exception ex)
            {
                return Fail<IEnumerable<Doctor>>(ex.Message);
            }
        }

        public async Task<Result<Doctor>> GetById(int Id)
        {
            try
            {
                var res = await _unitOfWork.Doctor.GetById(Id);
                if (res != null)
                {
                    return Success(res);
                }
                return Fail<Doctor>("Not found");
            }
            catch (Exception ex)
            {
                return Fail<Doctor>(ex.Message);
            }
        }

    }
}
