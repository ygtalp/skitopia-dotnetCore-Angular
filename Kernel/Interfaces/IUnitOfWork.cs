using System;
using System.Threading.Tasks;
using Kernel.Entities;

namespace Kernel.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
         IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;
         Task<int> Complete();
    }
}