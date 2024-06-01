using Project305.Domain.Models;

namespace Project305.Business.DoctorService
{
    public interface IDoctorService
    {
        Task<Result<IEnumerable<Doctor>>> GetAll();
        Task<Result<Doctor>> GetById(int Id);
        Task<Result<Doctor>> CreateAsync(Doctor doctor);
        Task<Result<Doctor>> DeleteAsync(int Id);
    }
}
