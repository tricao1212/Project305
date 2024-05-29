using Project305.Data_Access.GenericRepo;
using Project305.Domain.Models;

namespace Project305.Data_Access.Repositories.RequestConsultRepo
{
    public interface IRequestConsultRepo : IRepository<RequestConsult>
    {
        Task<IEnumerable<RequestConsult>> GetByIdDoctor(int Id);
        Task<IEnumerable<RequestConsult>> GetByIdPatient(int Id);
        Task<RequestConsult> GetRequestByDoctorAndPatient(int DoctorId, int PatientId);
    }
}
