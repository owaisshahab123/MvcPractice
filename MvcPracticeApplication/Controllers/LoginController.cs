using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using ViewModel.Model;
using static ViewModel.ViewModel;
using static ViewModel.VM;
using static ViewModel.Model.HttpApi;

namespace MvcPracticeApplication.Controllers
{
    public class LoginController : Controller
    {
        public ActionResult Index()
        {
            Session sess = (Session)System.Web.HttpContext.Current.Session["Session"];

            if (sess != null)
            {
                string url = "";
                if (sess.SessionUser.Role_ID == Common.SuperAdmin_ID())
                {
                    url = "/User/DashBoard";
                }

                return Redirect(url);
            }

            return View();
        }

        [HttpPost]
        public ActionResult LoginValidate(string uid, string pass)
        {
            try
            {
                string pass123 = Common.Decrypt("123gdk34293kdx=");
                string url = "";

                UserProfileCustom profile = new UserProfileCustom();
                profile.User_ID = uid;
                profile.Password = pass;
                profile.isWeb = true;

                string strResponse = CreateRequest(ConfigurationManager.AppSettings["APIHostDomain"].ToString() + "/api/Login/ValidateLogin/", profile);

                GetLoginResponse loginRes = JsonConvert.DeserializeObject<GetLoginResponse>(strResponse);

                if (loginRes.Header.IsSuccess)
                {
                    Session sess = new Session();
                    Session.Add("Session", null);
                    sess.SessionUser = loginRes.User;
                    sess.pagelist = loginRes.Permissions;
                    Session.Add("Session", sess);
                    Session.Timeout = 600;
                    if (loginRes.User.Role_ID == Common.SuperAdmin_ID())
                    {
                        url = "/User/DashBoard";
                    }

                    Session["UserID"] = loginRes.User.ID;
                    TempData["IsLogin"] = "true";
                }
                return Json(new { success = loginRes.Header.IsSuccess, message = loginRes.Header.Message, RedirectURL = url }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new { Success = false, Message = ex.Message.ToString() }, JsonRequestBehavior.AllowGet);

            }

        }

        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            Session.Abandon();
            Session.Add("Session", null);
            return View("Index");
        }
    }
}