using Project305.Data_Access.GenericRepo;
using Project305.Domain.Models;

namespace Project305.Data_Access.Repositories.InforConsultRepo
{
    public interface IInforConsultRepo : IRepository<InforConsult>
    {
        Task<IEnumerable<InforConsult>> GetByIdDoctor(int Id);
        Task<IEnumerable<InforConsult>> GetByIdPatient(int Id);
    }
}
