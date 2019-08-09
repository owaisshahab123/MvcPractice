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
    class UserRepository : BaseRepository
    {
        public static string connectionString = ConfigurationManager.AppSettings["MVC_Practice"].ToString();

        public UserRepository()
    : base()
        {

        }

        public UserRepository(MVC_PracticeEntities ContextDB)
    : base(ContextDB)
        {

            DBContext = ContextDB;
        }
    }
}
