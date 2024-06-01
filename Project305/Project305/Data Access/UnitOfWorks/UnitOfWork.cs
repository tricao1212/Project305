using Microsoft.EntityFrameworkCore;
using Project305.Data_Access.Repositories;
using Project305.Data_Access.Repositories.DoctorRepo;
using Project305.Data_Access.Repositories.InforConsultRepo;
using Project305.Data_Access.Repositories.PatientRepo;
using Project305.Data_Access.Repositories.RequestConsultRepo;
using Project305.Domain.Data;
using Project305.Domain.Models;

namespace Project305.Data_Access.UnitOfWorks
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext _context;
        public UnitOfWork(Project305Context context)
        {
            _context = context;

        }

        private AccountRepo AccountRepo;
        public IAccountRepo Account
        {
            get
            {
                return AccountRepo ??= new(_context);
            }
        }

        private PatientRepo PatientRepo;
        public IPatientRepo Patient
        {
            get
            {
                return PatientRepo ??= new(_context);
            }
        }

        private DoctorRepo DoctorRepo;
        public IDoctorRepo Doctor
        {
            get
            {
                return DoctorRepo ??= new(_context);
            }
        }

        private InforConsultRepo InforConsultRepo;
        public IInforConsultRepo InforConsult
        {
            get
            {
                return InforConsultRepo ??= new(_context);
            }
        }

        private RequestConsultRepo RequestConsultRepo;
        public IRequestConsultRepo RequestConsult
        {
            get
            {
                return RequestConsultRepo ??= new(_context);
            }
        }
    }
}
