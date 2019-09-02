using ViewModel.Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcPracticeApplication.Controllers
{
    public class BaseController : Controller
    {
        // GET: Base
        Session _user;


        public Session CurrentUser
        {
            get
            {
                if (System.Web.HttpContext.Current.Session["Session"] != null)
                {
                    _user = (Session)System.Web.HttpContext.Current.Session["Session"];
                }
                return _user;
            }
            set
            {
                _user = value;
            }
        }


        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var urlHelper = new UrlHelper(filterContext.RequestContext);
            if (System.Web.HttpContext.Current.Session["Session"] != null)
            {

                Session sess = (Session)System.Web.HttpContext.Current.Session["Session"];
                var rd = System.Web.HttpContext.Current.Request.RequestContext.RouteData;
                string currentController = rd.GetRequiredString("controller");
                string currentAction = rd.GetRequiredString("action");

                if (sess.pagelist != null)
                {
                    var Allow = sess.pagelist.Where(x => x.PageURL.ToString().Trim().ToLower() == (currentController + "/" + currentAction).ToString().Trim().ToLower()).FirstOrDefault();

                    System.Web.HttpContext.Current.Session["Session"] = sess;

                    if (Allow == null)
                    {
                        if (!filterContext.HttpContext.Request.IsAjaxRequest())
                            filterContext.Result = new RedirectResult("~/Error/Permission");
                        else
                        {
                            filterContext.HttpContext.Response.StatusCode = 403;
                            filterContext.Result = new JsonResult
                            {
                                Data = new
                                {
                                    Error = "NotAuthorized",
                                    LogOnUrl = urlHelper.Action("Permission", "Error")
                                },
                                JsonRequestBehavior = JsonRequestBehavior.AllowGet
                            };
                        }
                    }

                }
                else
                {

                    if (!filterContext.HttpContext.Request.IsAjaxRequest())
                        filterContext.Result = new RedirectResult("~/Error/Permission");
                    else
                    {
                        filterContext.HttpContext.Response.StatusCode = 403;
                        filterContext.Result = new JsonResult
                        {
                            Data = new
                            {
                                Error = "NotAuthorized",
                                LogOnUrl = urlHelper.Action("Permission", "Error")
                            },
                            JsonRequestBehavior = JsonRequestBehavior.AllowGet
                        };
                    }

                }


            }
            else
            {
                filterContext.Result = new RedirectResult("~/Login/Index");
            }
            base.OnActionExecuting(filterContext);
        }

    }
}