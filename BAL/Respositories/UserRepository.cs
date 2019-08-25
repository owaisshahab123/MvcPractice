using DAL.DBEntities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;
using System.Web;
//using System.Web.Mvc;
using static ViewModel.ViewModel;
using static ViewModel.VM;
using ViewModel.Model;

namespace BAL.Respositories
{
    public class UserRepository : BaseRepository
    {
        public static string connectionString = ConfigurationManager.AppSettings["cs_MvcPractice"].ToString();

        public UserRepository()
    : base()
        {

        }

        public UserRepository(MvcPracticeEntities ContextDB)
    : base(ContextDB)
        {

            DBContext = ContextDB;
        }
    }
}
