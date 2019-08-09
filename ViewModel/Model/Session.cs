using DAL.DBEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel.Model
{
    public class Session
    {
        public UserProfile SessionUser { get; set; }
        public List<UserPermission> pagelist { get; set; }

        public string isSignalRConnected { get; set; }
        public string AccessToken { get; set; }

        public static string UserContextID { get; set; }
    }
}
