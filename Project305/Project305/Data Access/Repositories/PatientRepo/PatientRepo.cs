using Microsoft.EntityFrameworkCore;
using Project305.Data_Access.GenericRepo;
using Project305.Domain.Models;

namespace Project305.Data_Access.Repositories.PatientRepo
{
    public class PatientRepo : Repository<Patient>, IPatientRepo
    {
        public PatientRepo(DbContext _dbContext) : base(_dbContext)
        {

        }
        public async Task<IEnumerable<Patient>> GetAllIncludePrefined()
        {
            return await _dbSet.Include(x => x.Predefined).ToListAsync();
        }

        public async Task<Patient> GetByIdIncludePrefined(int id)
        {
            return await _dbSet.Include(x => x.Predefined).FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
