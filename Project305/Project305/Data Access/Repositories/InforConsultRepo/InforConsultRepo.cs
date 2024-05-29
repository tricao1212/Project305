using Microsoft.EntityFrameworkCore;
using Project305.Data_Access.GenericRepo;
using Project305.Domain.Models;

namespace Project305.Data_Access.Repositories.InforConsultRepo
{
    public class InforConsultRepo : Repository<InforConsult>, IInforConsultRepo
    {
        public InforConsultRepo(DbContext dbContext) : base(dbContext)
        {

        }
        public async Task<IEnumerable<InforConsult>> GetByIdDoctor(int Id)
        {
            return await _dbSet.Where(x => x.DoctorId == Id).ToListAsync();
        }

        public async Task<IEnumerable<InforConsult>> GetByIdPatient(int Id)
        {
            return await _dbSet.Where(x => x.PatientId == Id).ToListAsync();
        }
    }
}
