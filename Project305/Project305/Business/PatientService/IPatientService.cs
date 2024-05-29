using Project305.Domain.Models;

namespace Project305.Business.PatientService
{
    public interface IPatientService
    {
        Task<Result<IEnumerable<Patient>>> GetAll();
        Task<Result<Patient>> GetById(int Id);
        Task<Result<Patient>> CreateAsync(Patient patient);
        Task<Result<Patient>> DeleteAsync(int Id);
    }
}
