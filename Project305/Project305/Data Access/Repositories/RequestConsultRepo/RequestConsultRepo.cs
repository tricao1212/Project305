using Microsoft.EntityFrameworkCore;
using Project305.Data_Access.GenericRepo;
using Project305.Domain.Models;

namespace Project305.Data_Access.Repositories.RequestConsultRepo
{
    public class RequestConsultRepo : Repository<RequestConsult>, IRequestConsultRepo
    {
        public RequestConsultRepo(DbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<RequestConsult>> GetByIdDoctor(int Id)
        {
            return await _dbSet.Where(x => x.DoctorId == Id).ToListAsync();
        }

        public async Task<IEnumerable<RequestConsult>> GetByIdPatient(int Id)
        {
            return await _dbSet.Where(x => x.PatientId == Id).ToListAsync();
        }

        public async Task<RequestConsult> GetRequestByDoctorAndPatient(int DoctorId, int PatientId)
        {
            return await _dbSet.FirstOrDefaultAsync(a => a.DoctorId == DoctorId && a.PatientId == PatientId);
        }
    }
}
