using Project305.Data_Access.Repositories;

namespace Project305.Data_Access.UnitOfWorks
{
    public interface IUnitOfWork
    {
        IAccountRepo Account { get; }
    }
}
