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
    }
}
