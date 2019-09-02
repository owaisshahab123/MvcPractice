using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static ViewModel.ViewModel;
using static ViewModel.Model.HttpApi;
using static ViewModel.VM;

namespace MvcPracticeApplication.Controllers
{
    public class UserController : BaseController
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        #region Dashboard
        public ActionResult DashBoard()
        {
            return View();
        }
        #endregion Dashboard

        public ActionResult UserEntry()
        {
            return View();
        }

        [HttpPost]
        public ActionResult CreateAndModifyUserEntry(UserProfileCustom upc)
        {
            try
            {
                upc.Created_At = DateTime.Now;
                string strResponse = CreateRequest(ConfigurationManager.AppSettings["APIHostDomain"].ToString() + "api/User/CreateAndModifyUserEntry/", upc);
                var res = JsonConvert.DeserializeObject<APIResponseHeader>(strResponse);
                return Json(new { Success = res.IsSuccess, Message = res.Message }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new { Success = false, Message = ex.Message.ToString() }, JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public JsonResult GetAllClasses()
        {
            APIRequestHeader header = new APIRequestHeader();
            header.UserEmail = (CurrentUser.SessionUser.Email).ToString();
            header.UserID = (CurrentUser.SessionUser.ID).ToString();
            header.RoleID = Convert.ToInt32(CurrentUser.SessionUser.Role_ID);

            string strResponse = CreateRequest(ConfigurationManager.AppSettings["APIHostDomain"].ToString() + "/api/User/GetAllClasses/", header);
            var res = JsonConvert.DeserializeObject<GetClassesList>(strResponse);
            string STRresponse = JsonConvert.SerializeObject(res, Formatting.Indented, new JsonSerializerSettings() { DateFormatString = "dd/MM/yyyy" });

            return Json(new { response = STRresponse }, JsonRequestBehavior.AllowGet);

        }
    }
}