using Microsoft.EntityFrameworkCore;
using ShopperStop.DataLayer.Interface;
using ShopperStop.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopperStop.DataLayer
{
  public class Repo<T> : IRepo<T> where T : class
  {

     NORTHWNDContext context = new NORTHWNDContext();

    public DbSet<T> dbset;
    public Repo()
    {
     // this.context = context;
     
    }

    public T GetById(int id)
    {
      dbset = context.Set<T>();
      return dbset.Find(id);
    }


    public IQueryable<T> GetAll()
    {
      dbset = context.Set<T>();
      return dbset;
    }

    public void Insert(T entity)
    {
      dbset = context.Set<T>();
      dbset.Add(entity);
      context.SaveChanges();
    }



    public void Edit(T entity)
    {
      dbset = context.Set<T>();
      context.Entry(entity).State = EntityState.Modified;
      context.SaveChanges();
    }


    public void Delete(T entity)
    {
      dbset = context.Set<T>();
      context.Entry(entity).State = EntityState.Deleted;

      context.SaveChanges();
    }

  }
}
