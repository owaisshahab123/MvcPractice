using BAL.Respositories;
using DAL.DBEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using ViewModel.Model;
using static ViewModel.ViewModel;
using static ViewModel.VM;

namespace MvcApiApplication.Controllers
{
    public class LoginController : ApiController
    {
        Session Cpmmonsession = new Session();

        LoginRepository loginrepo;
        UserRepository userrepo;
        public LoginController()
        {
            loginrepo = new LoginRepository(new MvcPracticeEntities());
            userrepo = new UserRepository(new MvcPracticeEntities());
        }

        // GET: Login
        [Route("api/Login/ValidateLogin")]
        [HttpPost]
        public GetLoginResponse ValidateLogin(UserProfileCustom User)
        {
            var data = Common.Encrypt(User.EmailAddress);


            GetLoginResponse Response = new GetLoginResponse();

            APIResponseHeader Header = new APIResponseHeader();
            try
            {
                var user = loginrepo.GetUserProfile(User.EmailAddress, User.Password);

                if (User.isWeb == true)
                {

                    if (user != null)
                    {
                        loginrepo.InsertEntryExitLogs(user.ID, true, "Enter");
                        Cpmmonsession.AccessToken = "abc";
                        Header.AccessToken = "abc";
                        Header.IsSuccess = true;
                        Header.Message = "Record Found";
                        Response.User = user;
                        Response.Permissions = loginrepo.GetUserPermission(Convert.ToInt32(user.ID), Convert.ToInt32(user.Role_ID));
                    }
                    else
                    {
                        Header.IsSuccess = false;
                        Header.Message = "Record Not Found";
                        loginrepo.InsertEntryExitLogs(user.ID, false, "Enter");
                    }


                }
                else
                {
                    if (user != null)
                    {

                        Cpmmonsession.AccessToken = "abc";
                        Header.AccessToken = "abc";
                        Header.IsSuccess = true;
                        Header.Message = "Record Found";
                        Response.User = user;

                    }
                    else
                    {
                        Header.IsSuccess = true;
                        Header.Message = "Record Not Found";

                    }

                }

            }
            catch (Exception ex)
            {
                Header.IsSuccess = false;
                Header.Message = ex.Message;
            }
            Response.Header = Header;
            return Response;
        }

        [Route("api/Login/MobUserLogout")]
        [HttpPost]
        public GetLoginResponse MobUserLogout(UserProfileCustom User)
        {

            GetLoginResponse Response = new GetLoginResponse();

            APIResponseHeader Header = new APIResponseHeader();
            try
            {
                var user = loginrepo.UserByID(Convert.ToInt32(User.EmailAddress));
                if (user != null)
                {
                    Header.IsSuccess = true;
                    Header.Message = "Record Updated successfully.";
                }
                else
                    throw new Exception("");


            }
            catch (Exception)
            {
                Header.IsSuccess = false;
                Header.Message = "Exception occured when logout.";
            }
            Response.Header = Header;
            return Response;
        }


        [Route("api/Login/LogoutLogs")]
        [HttpPost]
        public GetLoginResponse LogoutLogs(UserProfileCustom User)
        {

            GetLoginResponse Response = new GetLoginResponse();

            APIResponseHeader Header = new APIResponseHeader();
            try
            {

                loginrepo.InsertEntryExitLogs(User.ID, true, "Exit");

            }
            catch (Exception)
            {
                Header.IsSuccess = false;
                Header.Message = "Exception occured when logout.";
            }
            Response.Header = Header;
            return Response;
        }
    }
}