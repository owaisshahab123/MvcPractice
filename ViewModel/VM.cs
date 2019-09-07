using DAL.DBEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel
{
    public class VM : ViewModel
    {
        public class ChangePassword
        {
            public int UserID { get; set; }
            public string CurrentPassword { get; set; }
            public string NewPassword { get; set; }
            public string ConfirmPassword { get; set; }
        }

        public class GetLoginResponse
        {
            public APIResponseHeader Header { get; set; }
            public UserProfile User { get; set; }

            public List<UserPermission> Permissions { get; set; }
        }

        public class GetUserList
        {
            public APIResponseHeader Header { get; set; }
            public List<UserProfile> UserList { get; set; }
        }


        public class GetClassesList
        {
            public APIResponseHeader Header { get; set; }
            public List<SchoolClass> ClassesList { get; set; }
        }

        public class Users
        {
            public APIResponseHeader Header { get; set; }

            public UserProfile User { get; set; }
        }

    }
}
