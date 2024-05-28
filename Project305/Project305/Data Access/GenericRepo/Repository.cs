
using Microsoft.EntityFrameworkCore;
using Project305.Domain.Models;

namespace Project305.Data_Access.GenericRepo
{
    public abstract class Repository<T> : IRepository<T> where T : BaseEntity
    {
        protected DbContext _dbContext;
        protected DbSet<T> _dbSet;
        public Repository(DbContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = dbContext.Set<T>();
        }
        public async Task<T> CreateEntity(T entity)
        {
            await _dbSet.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        public async Task DeleteEntity(int id)
        {
            T entity = await GetById(id);
            _dbSet.Remove(entity);
            await _dbContext.SaveChangesAsync();
            await Task.CompletedTask;
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T> GetById(int id)
        {
            return await _dbSet.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<T> UpdateEntity(T entity)
        {
            _dbSet.Update(entity);
            await Task.CompletedTask;
            return entity;
        }
    }
}
