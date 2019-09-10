﻿using Newtonsoft.Json;
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
                profile.EmailAddress = uid;
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
                    Session.Timeout = 1800;
                    if (loginRes.User.Role_ID == Common.SuperAdmin_ID())
                    {
                        url = "/User/UserEntry";
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
            UserProfileCustom upc = new UserProfileCustom();
            Session sess = (Session)Session["Session"];
            object obj = new object();
            upc.ID = sess.SessionUser.ID;
            string strResponse = CreateRequest(ConfigurationManager.AppSettings["APIHostDomain"].ToString() + "/api/Login/LogoutLogs/", upc);
            FormsAuthentication.SignOut();
            Session.Abandon();
            Session.Add("Session", null);
            return View("Index");
        }

        public ActionResult test()
        {

            return View();
        }

        public ActionResult destiny()
        {

            return View();
        }
    }
}