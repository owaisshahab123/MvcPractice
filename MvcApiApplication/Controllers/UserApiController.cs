using BAL.Respositories;
using DAL.DBEntities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Http;
using ViewModel.Model;
using static ViewModel.ViewModel;
using static ViewModel.VM;

namespace MvcApiApplication.Controllers
{
    public class UserController : ApiController
    {
        // GET: UserApi
        UserRepository userrepo;

        public UserController()
        {
            userrepo = new UserRepository(new MvcPracticeEntities());
        }

        [Route("api/User/CreateAndModifyUserEntry")]
        [HttpPost]
        public APIResponseHeader CreateAndModifyUserEntry(UserProfileCustom upc)
        {
            APIResponseHeader Header = new APIResponseHeader();
            try
            {
                int abc = 0;
                string abcd = string.Empty;
                abcd = "testing";
                abc = Convert.ToInt32(abcd);

                UserProfile up = new UserProfile();
                up.ContactNumber = upc.ContactNo;
                up.First_Name = upc.First_Name;
                up.Last_Name = upc.Last_Name;
                up.DOB = upc.DOB;
                up.Class = upc.Class;
                up.EmailAddress = upc.EmailAddress;
                up.Password = upc.Password;
                up.FatherGuardians = upc.FatherGuardian;
                up.Role_ID = upc.Role_ID;


                userrepo.AddNewUserEntry(up);

                if (true)
                {
                    Header.IsSuccess = true;
                    Header.Message = "Record Updated Successfully";
                }
                else
                {
                    Header.IsSuccess = true;
                    Header.Message = "Record Added Successfully";
                }
            }

            catch (Exception ex)
            {
                //Header.IsSuccess = false;
                //Header.Message = ex.Message;
                userrepo.InsertError(ex.Message,ex.StackTrace,upc.ID, "UserApiController_CreateAndModifyUserEntry");
            }
            return Header;
        }

        [Route("api/User/GetAllClasses")]
        [HttpPost]
        public GetClassesList GetAllClasses(APIRequestHeader ApiResquest)
        {

            GetClassesList Response = new GetClassesList();
            APIResponseHeader Header = new APIResponseHeader();

            try
            {
                List<SchoolClass> ClassesList = new List<SchoolClass>();
                if (ApiResquest.RoleID == 1)
                {
                    ClassesList = userrepo.GetAllClasses();
                }


                if (ClassesList.Count > 0)
                {
                    Header.IsSuccess = true;
                    Header.Message = "Record Found";
                    Response.ClassesList = ClassesList;
                }
                else
                {
                    Header.IsSuccess = true;
                    Header.Message = "Record Not Found";
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

        [Route("api/User/GetErrorLogs")]
        [HttpPost]
        public GetErrorList GetErrorLogs(APIRequestHeader ApiResquest)
        {

            GetErrorList Response = new GetErrorList();

            APIResponseHeader Header = new APIResponseHeader();

            try
            {
                List<ErrorLog> Error_List = new List<ErrorLog>();
                if (ApiResquest.RoleID == 1)
                {
                    Error_List = userrepo.GetErrorList();
                }


                if (Error_List.Count > 0)
                {
                    Header.IsSuccess = true;
                    Header.Message = "Record Found";
                    Response.ErrorList = Error_List;
                }
                else
                {
                    Header.IsSuccess = true;
                    Header.Message = "Record Not Found";
                }
            }
            catch (Exception ex)
            {
                Header.IsSuccess = false;
                Header.Message = ex.Message;
                userrepo.InsertError(ex.Message, ex.StackTrace,ApiResquest.UserID , "UserApiController_GetErrorLogs");
            }
            Response.Header = Header;
            return Response;
        }


        [Route("api/User/GetAllUsers")]
        [HttpPost]
        public GetUserList GetAllUsers(APIRequestHeader ApiResquest)
        {

            GetUserList Response = new GetUserList();
            APIResponseHeader Header = new APIResponseHeader();

            try
            {
                List<UserProfile> UserList = new List<UserProfile>();

                UserList = userrepo.GetUsers();


                if (UserList.Count > 0)
                {
                    Header.IsSuccess = true;
                    Header.Message = "Record Found";
                    Response.UserList = UserList;
                }
                else
                {
                    Header.IsSuccess = true;
                    Header.Message = "Record Not Found";
                }
            }
            catch (Exception ex)
            {
                Header.IsSuccess = false;
                Header.Message = ex.Message;
                userrepo.InsertError(ex.Message, ex.StackTrace,ApiResquest.UserID, "UserApiController_GetAllUsers");
            }
            Response.Header = Header;
            return Response;
        }

        [Route("api/User/GetUserByID")]
        [HttpPost]
        public Users GetUserByID(APIRequestHeader ApiResquest)
        {

            Users Response = new Users();
            APIResponseHeader Header = new APIResponseHeader();
            try
            {
                var User = userrepo.GetuserByID(ApiResquest.ID);
                if (User != null)
                {
                    Header.IsSuccess = true;
                    Header.Message = "Record Found";
                    Response.User = User;
                }
                else
                {
                    Header.IsSuccess = true;
                    Header.Message = "Record Not Found";
                    Response.User = null;
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

        [Route("api/User/DeleteUser")]
        [HttpPost]
        public APIResponseHeader DeleteUser(UserProfile up)
        {
            APIResponseHeader Header = new APIResponseHeader();
            try
            {
                    userrepo.DeleteUser(up);
                    Header.IsSuccess = true;
                    Header.Message = "Record Deleted Successfully"; 
            }
            catch (Exception ex)
            {
                Header.IsSuccess = false;
                Header.Message = ex.Message;
            }
            return Header;
        }


        [Route("api/User/FrontEndErrorLogs")]
        [HttpPost]
        public APIResponseHeader FrontEndErrorLogs(FrontEndErrorCustom error)
        {
            APIResponseHeader Header = new APIResponseHeader();
            try
            {
                userrepo.InsertError(error.message,error.stack,error.UserID,error.view);
                Header.IsSuccess = true;
                Header.Message = "Log entered Successfully";
            }
            catch (Exception ex)
            {
                Header.IsSuccess = false;
                Header.Message = ex.Message;
            }
            return Header;
        }

    }
}