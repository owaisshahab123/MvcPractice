using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel
{
    public class ViewModel
    {
        public class APIRequestHeader
        {
            public int ID { get; set; }
            public string SerialNo { get; set; }
            public string UserID { get; set; }
            public int RoleID { get; set; }
            public string UserEmail { get; set; }
            public string Password { get; set; }
            public string Token { get; set; }
            public bool status { get; set; }
            public string Type { get; set; }
            public bool isWeb { get; set; }
            public string Date { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
        }

        public class APIResponseHeader
        {
            public bool IsSuccess { get; set; }

            public string Message { get; set; }

            public string IsMobile { get; set; }

            public string AccessToken { get; set; }
            public int Role_ID { get; set; }
            public string CreatedDate { get; set; }
        }

        public partial class UserProfileCustom
        {
            public int ID { get; set; }
            public Nullable<int> Role_ID { get; set; }
            public Nullable<bool> IsActive { get; set; }
            public string Fisrt_Name { get; set; }
            public string Last_Name { get; set; }
            public string User_ID { get; set; }
            public string Password { get; set; }
            public string Image { get; set; }
            public Nullable<System.DateTime> Created_At { get; set; }
            public Nullable<int> Created_By { get; set; }
            public Nullable<System.DateTime> Updated_At { get; set; }
            public Nullable<int> Updated_By { get; set; }
            public Nullable<System.DateTime> Deleted_At { get; set; }
            public Nullable<int> Deleted_By { get; set; }
            public Nullable<bool> IsDleteted { get; set; }
            public string ContactNumber { get; set; }
            public string Email { get; set; }
            public bool isWeb { get; set; }
            public string DeviceToken { get; set; }
            public string DeviceType { get; set; }
        }
    }
}
