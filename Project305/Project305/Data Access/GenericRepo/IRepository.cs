using Project305.Domain.Models;

namespace Project305.Data_Access.GenericRepo
{
    public interface IRepository<T> where T : BaseEntity
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(int id);
        Task<T> CreateEntity(T entity);
        Task<T> UpdateEntity(T entity);
        Task DeleteEntity(int id);
    }
}
