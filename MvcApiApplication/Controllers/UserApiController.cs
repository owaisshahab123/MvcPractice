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
                userrepo.InsertError("UserApiController", "Not Known", ex.Message, ex.StackTrace, "XYZ");
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

    }
}