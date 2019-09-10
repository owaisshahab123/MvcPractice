using DAL.DBEntities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModel.Model;
using static ViewModel.ViewModel;

namespace BAL.Respositories
{
    public class LoginRepository : BaseRepository
    {
        public LoginRepository()
            : base()
        {

        }

        public LoginRepository(MvcPracticeEntities ContextDB)
            : base(ContextDB)
        {

            DBContext = ContextDB;
            //DBContext.Database.Connection.Open();
        }

        public UserProfile GetUserProfile(string uid, string pass)
        {
            var password = Common.Encrypt(pass);
            return DBContext.UserProfiles.Where(x => x.IsActive == true && x.Deleted_At == null && x.Email.Trim().ToLower().Replace(" ", "") == uid.Trim().ToLower().Replace(" ", "") && x.Password == password).FirstOrDefault();
        }
        public UserProfile UserByID(int uid)
        {
            return DBContext.UserProfiles.Where(x => x.ID == uid).FirstOrDefault();
        }
        public UserProfile GetUserContractorProfileByRoleID(string UName, string pass, int roleid)
        {
            var password = Common.Encrypt(pass);
            return DBContext.UserProfiles.Where(x => x.IsActive == true && x.Deleted_At == null && x.First_Name.Trim().ToLower().Replace(" ", "") == UName.Trim().ToLower().Replace(" ", "") && x.Password == password && x.Role_ID == roleid).FirstOrDefault();
        }
        public UserProfile GetUserEngProfileByRoleID(string Email, string pass, int roleid)
        {
            var password = Common.Encrypt(pass);
            return DBContext.UserProfiles.Where(x => x.IsActive == true && x.Deleted_At == null && x.Email.Trim().ToLower().Replace(" ", "") == Email.Trim().ToLower().Replace(" ", "") && x.Password == password && x.Role_ID == roleid).FirstOrDefault();
        }


        public List<UserPermission> GetUserPermission(int UserID, int RoleID)
        {
            return DBContext.UserPermissions.Where(x => x.Role == RoleID).ToList();
        }

        public void InsertEntryExitLogs(int UserID,bool Status,string EntryExitCheck)
        {
            SqlParameter[] Pram = {
                 new SqlParameter("@UserID",UserID)
                ,new SqlParameter("@Status",Status)
                ,new SqlParameter("@EntryExitCheck",EntryExitCheck)
            };

            var result = Entity_Common.get_Scalar(DBContext, "InsertEntryExitLogs", Pram);
        }
    }
}