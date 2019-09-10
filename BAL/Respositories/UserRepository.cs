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

        public void InsertError(string ErrorMsg, string StackTrace, int LoginUser, string Location)
        {
            SqlParameter[] Pram = {
                 new SqlParameter("@ErrorMsg",ErrorMsg)
                ,new SqlParameter("@StackTrace",StackTrace)
                ,new SqlParameter("@LoginUser",LoginUser)
                ,new SqlParameter("@Location",Location)
            };

            var result = Entity_Common.get_Scalar(DBContext, "InsertErrorLogs", Pram);

        }

        public UserProfile AddNewUserEntry(UserProfile userProfile)
        {
            if (userProfile.ID == 0)
            {
                userProfile.Created_At = Common.GetCurrentDateTime();
                if (userProfile.IsActive == null) { userProfile.IsActive = true; }
                DBContext.Entry(userProfile).State = EntityState.Added;
                DBContext.SaveChanges();
                return userProfile;
            }
            else
            {
                var reg = DBContext.UserProfiles.Where(x => x.ID == userProfile.ID).FirstOrDefault();
                reg.Updated_At = Common.GetCurrentDateTime();
                if (userProfile.IsActive == null) { reg.IsActive = true; } else { reg.IsActive = userProfile.IsActive; }
                reg.Updated_By = userProfile.Updated_By;
                reg.First_Name = userProfile.First_Name;
                reg.Last_Name = userProfile.Last_Name;
                reg.FatherGuardians = userProfile.FatherGuardians;
                reg.Class = userProfile.Class;
                reg.DOB = userProfile.DOB;
                reg.ContactNumber = userProfile.ContactNumber;
                DBContext.UserProfiles.Attach(reg);
                DBContext.UpdateOnly<UserProfileCustom>(reg, x => x.First_Name, x => x.Last_Name, x => x.ContactNo, x => x.DOB, x => x.Class, x => x.FatherGuardian);
                DBContext.SaveChanges();
                return reg;
            }
        }

        public List<SchoolClass> GetAllClasses()
        {
            return DBContext.SchoolClasses.Where(x => x.IsActive == true && (x.IsDeleted == false || x.IsDeleted == null)).ToList();
        }

        public List<ErrorLog> GetErrorList()
        {
            return DBContext.ErrorLogs.OrderByDescending(x => x.ID).ToList();
        }

        public List<UserProfile> GetUsers()
        {
            return DBContext.UserProfiles.Where(x => x.IsActive == true && (x.IsDeleted == false || x.IsDeleted == null)).ToList();
        }

        public UserProfile GetuserByID(int id)
        {
            return DBContext.UserProfiles.Where(x => x.ID == id).FirstOrDefault();
        }


        public UserProfile DeleteUser(UserProfile up)
        {
            var reg = DBContext.UserProfiles.Where(x => x.ID == up.ID).FirstOrDefault();
            reg.Deleted_At = Common.GetCurrentDateTime();
            reg.Deleted_By = up.Deleted_By;
            reg.IsDeleted = true;
            DBContext.UserProfiles.Attach(reg);
            DBContext.UpdateOnly<UserProfile>(reg, x => x.Deleted_At, x => x.Deleted_By, x => x.IsDeleted
                );
            DBContext.SaveChanges();
            return up;
        }

    }
}
