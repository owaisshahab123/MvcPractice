using DAL.DBEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BAL.Respositories
{
    public class BaseRepository
    {
        public MVC_PracticeEntities DBContext;

        public BaseRepository()
        {
            DBContext = new MVC_PracticeEntities();
        }

        public BaseRepository(MVC_PracticeEntities ContextDB)
        {
            DBContext = ContextDB;
            DBContext.Configuration.LazyLoadingEnabled = false;
            DBContext.Configuration.ProxyCreationEnabled = false;
        }
        public void SaveChanges()
        {
            DBContext.SaveChanges();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        public virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (DBContext != null)
                {
                    DBContext.Dispose();
                    DBContext = null;
                }
            }
        }
        ~BaseRepository()
        {
            Dispose(false);
        }
    }
}
