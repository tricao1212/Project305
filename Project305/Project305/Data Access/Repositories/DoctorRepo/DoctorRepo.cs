using Microsoft.EntityFrameworkCore;
using Project305.Data_Access.GenericRepo;
using Project305.Domain.Models;

namespace Project305.Data_Access.Repositories.DoctorRepo
{
    public class DoctorRepo : Repository<Doctor>, IDoctorRepo
    {
        public DoctorRepo(DbContext dbContext) : base(dbContext)
        {
        }
    }
}
