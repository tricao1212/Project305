using Project305.Domain.Models;

namespace Project305.Business.RequestConsultService
{
    public interface IRequestConsultService
    {
        Task<Result<IEnumerable<RequestConsult>>> GetAll();
        Task<Result<IEnumerable<RequestConsult>>> GetByIdDoctor(int Id);
        Task<Result<IEnumerable<RequestConsult>>> GetByIdPatient(int Id);
        Task<Result<RequestConsult>> CreateAsync(RequestConsult requesConsult);
        Task<Result<RequestConsult>> DeleteAsync(int Id);
    }
}
