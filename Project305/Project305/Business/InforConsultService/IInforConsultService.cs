using Project305.Domain.Models;

namespace Project305.Business.InforConsultService
{
    public interface IInforConsultService
    {
        Task<Result<IEnumerable<InforConsult>>> GetAll();
        Task<Result<IEnumerable<InforConsult>>> GetByIdDoctor(int Id);
        Task<Result<IEnumerable<InforConsult>>> GetByIdPatient(int Id);
        Task<Result<InforConsult>> CreateAsync(InforConsult inforConsult);
        Task<Result<InforConsult>> DeleteAsync(int Id);
    }
}
