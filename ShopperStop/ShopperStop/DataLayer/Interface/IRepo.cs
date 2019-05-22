using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopperStop.DataLayer.Interface
{
  public interface IRepo<T>

  {

    T GetById(int id);

    IQueryable<T> GetAll();

    void Edit(T entity);

    void Insert(T entity);

    void Delete(T entity);

  }
}
