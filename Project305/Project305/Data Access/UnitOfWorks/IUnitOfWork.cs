using Project305.Data_Access.Repositories;
using Project305.Data_Access.Repositories.DoctorRepo;
using Project305.Data_Access.Repositories.InforConsultRepo;
using Project305.Data_Access.Repositories.PatientRepo;
using Project305.Data_Access.Repositories.RequestConsultRepo;

namespace Project305.Data_Access.UnitOfWorks
{
    public interface IUnitOfWork
    {
        IAccountRepo Account { get; }
        IPatientRepo Patient { get; }
        IDoctorRepo Doctor {  get; }
        IInforConsultRepo InforConsult { get; }
        IRequestConsultRepo RequestConsult { get; }
    }
}
