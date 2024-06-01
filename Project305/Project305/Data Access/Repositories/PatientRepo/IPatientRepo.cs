using Project305.Data_Access.GenericRepo;
using Project305.Domain.Models;

namespace Project305.Data_Access.Repositories.PatientRepo
{
    public interface IPatientRepo : IRepository<Patient>
    {
        Task<IEnumerable<Patient>> GetAllIncludePrefined();
        Task<Patient> GetByIdIncludePrefined(int id);
    }
}
