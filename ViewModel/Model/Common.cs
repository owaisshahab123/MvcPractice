using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Security;
using System.Reflection;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.UI;

namespace ViewModel.Model
{
    public static class Common
    {

        #region Security

        public static string DecryptPassword(string Password)
        {
            return Decrypt(Password);
        }

        public static string EncryptPassword(string Password)
        {
            return Encrypt(Password);
        }
        public enum Provider
        {
            linkedin,
            Facebook,
            Portal
        }

        public static string Encrypt(string originalString)
        {
            return Encrypt(originalString, getKey);
        }

        public static byte[] getKey
        {
            get
            {
                return ASCIIEncoding.ASCII.GetBytes(ConfigurationManager.AppSettings["EncryptKey"].ToString());
            }
        }
        public static string Encrypt(string originalString, byte[] bytes)
        {
            try
            {
                if (String.IsNullOrEmpty(originalString))
                {
                    throw new ArgumentNullException("The string which needs to be encrypted can not be null.");
                }

                DESCryptoServiceProvider cryptoProvider = new DESCryptoServiceProvider();
                MemoryStream memoryStream = new MemoryStream();
                CryptoStream cryptoStream = new CryptoStream(memoryStream, cryptoProvider.CreateEncryptor(bytes, bytes), CryptoStreamMode.Write);

                StreamWriter writer = new StreamWriter(cryptoStream);
                writer.Write(originalString);
                writer.Flush();
                cryptoStream.FlushFinalBlock();
                writer.Flush();

                var Converting = Convert.ToBase64String(memoryStream.GetBuffer(), 0, (int)memoryStream.Length);
                Converting = Regex.Replace(Converting, "/", "-");
                Converting = Regex.Replace(Converting, "[+]", "_");
                return Converting;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static string Decrypt(string originalString)
        {
            return Decrypt(originalString, getKey);
        }

        public static string Decrypt(string cryptedString, byte[] bytes)
        {
            try
            {
                if (String.IsNullOrEmpty(cryptedString))
                {
                    throw new ArgumentNullException("The string which needs to be decrypted can not be null.");
                }
                cryptedString = Regex.Replace(cryptedString, "-", "/");
                cryptedString = Regex.Replace(cryptedString, "[ ]", "+");
                cryptedString = Regex.Replace(cryptedString, "_", "+");

                DESCryptoServiceProvider cryptoProvider = new DESCryptoServiceProvider();
                MemoryStream memoryStream = new MemoryStream(Convert.FromBase64String(cryptedString));
                CryptoStream cryptoStream = new CryptoStream(memoryStream, cryptoProvider.CreateDecryptor(bytes, bytes), CryptoStreamMode.Read);
                StreamReader reader = new StreamReader(cryptoStream);

                return reader.ReadToEnd();
            }
            catch (Exception)
            {
                return "";
            }
        }




        #endregion

        #region Custome

        public static string RenderToString(this PartialViewResult partialView)
        {
            var httpContext = HttpContext.Current;

            if (httpContext == null)
            {
                throw new NotSupportedException("An HTTP context is required to render the partial view to a string");
            }

            var controllerName = httpContext.Request.RequestContext.RouteData.Values["controller"].ToString();

            var controller = (ControllerBase)ControllerBuilder.Current.GetControllerFactory().CreateController(httpContext.Request.RequestContext, controllerName);

            var controllerContext = new ControllerContext(httpContext.Request.RequestContext, controller);

            var view = ViewEngines.Engines.FindPartialView(controllerContext, partialView.ViewName).View;

            var sb = new StringBuilder();

            using (var sw = new StringWriter(sb))
            {
                using (var tw = new HtmlTextWriter(sw))
                {
                    view.Render(new ViewContext(controllerContext, view, partialView.ViewData, partialView.TempData, tw), tw);
                }
            }

            return sb.ToString();
        }

        public static string ConvertImagePathToBase64(string ImagePath)
        {
            string base64ImageRepresentation = "";

            try
            {
                byte[] imageArray = System.IO.File.ReadAllBytes(ImagePath);
                base64ImageRepresentation = Convert.ToBase64String(imageArray);

            }
            catch (Exception) { }


            return base64ImageRepresentation;
        }

        public static string DataTableToJSONWithJavaScriptSerializer(DataTable table)
        {
            JavaScriptSerializer jsSerializer = new JavaScriptSerializer();
            List<Dictionary<string, object>> parentRow = new List<Dictionary<string, object>>();
            Dictionary<string, object> childRow;
            foreach (DataRow row in table.Rows)
            {
                childRow = new Dictionary<string, object>();
                foreach (DataColumn col in table.Columns)
                {
                    childRow.Add(col.ColumnName, row[col]);
                }
                parentRow.Add(childRow);
            }
            return jsSerializer.Serialize(parentRow);
        }
        public static int SuperAdmin_ID()
        {
            return Convert.ToInt32(ConfigurationSettings.AppSettings["SuperAdmin_ID"].ToString());
        }
        public static int Admin_ID()
        {
            return Convert.ToInt32(ConfigurationSettings.AppSettings["Admin_ID"].ToString());
        }

        public static int ToInt(object value)
        {
            int parseVal;
            return ((value == null) || (value == DBNull.Value)) ? 0 : int.TryParse(value.ToString(), out parseVal) ? parseVal : 0;
        }
        public static DateTime GetCurrentDateTime()
        {
            string TimeZoneID = "Standard Time";

            DateTime dt = DateTime.Now;
            DateTime currentTime = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById(TimeZoneID));

            return currentTime;
        }

        public static DateTime ConvertDateString(string Date)
        {
            string[] formats = {
                "d/M/yyyy",
                 "d/M/yyyy h:mm:ss tt",
                         "d/M/yyyy h:mm tt",
                         "dd/MM/yyyy hh:mm:ss",
                         "dd/MM/yyyy hh:mm:ss tt",
                          "dd/MM/yyyy HH:mm:ss tt",
                           "dd/MM/yyyy HH:mm:ss",
                         "d/M/yyyy h:mm:ss",
                         "d/M/yyyy hh:mm tt",
                         "d/M/yyyy hh tt",
                         "d/M/yyyy h:mm",
                         "d/M/yyyy h:mm",
                         "dd/MM/yyyy hh:mm",
                         "dd/MM/yyyy hh:mm:ss",
                         "dd/M/yyyy hh:mm",
                         "d/MM/yyyy HH:mm:ss.ffffff",
                          "d/MM/yyyy",
                "M/d/yyyy h:mm:ss tt",
                           "M/d/yyyy h:mm tt",
                         "MM/dd/yyyy hh:mm:ss",
                          "MM/dd/yyyy hh:mm:ss tt",
                          "MM/dd/yyyy HH:mm:ss tt",
                           "MM/dd/yyyy HH:mm:ss",
                          "M/d/yyyy h:mm:ss",
                         "M/d/yyyy hh:mm tt",
                        "M/d/yyyy hh tt",
                         "M/d/yyyy h:mm",
                         "M/d/yyyy h:mm",
                         "MM/dd/yyyy hh:mm",
                         "MM/dd/yyyy hh:mm:ss",
                         "M/dd/yyyy hh:mm",
                         "MM/d/yyyy HH:mm:ss.ffffff",
                           "MM/d/yyyy"
                        };


            return DateTime.ParseExact(Date, formats, new CultureInfo("en-US"), DateTimeStyles.None);
        }

        public static TimeSpan ConvertTimeString(double hour, double minute, double second)
        {
            string strHour = "00";
            string strMinute = "00";
            string strSecond = "00";

            if (hour < 10)
                strHour = "0" + hour.ToString();
            else
                strHour = hour.ToString();

            if (minute < 10)
                strMinute = "0" + minute.ToString();
            else
                strMinute = minute.ToString();

            if (second < 10)
                strSecond = "0" + second.ToString();
            else
                strSecond = second.ToString();

            string strTotalTime = strHour + ":" + strMinute + ":" + strSecond;



            return ConvertStringTime(strTotalTime);
        }

        public static TimeSpan ConvertStringTime(string Time)
        {
            DateTime dt_TotalTime;
            DateTime.TryParseExact(Time, "HH:mm:ss", CultureInfo.InvariantCulture, DateTimeStyles.None, out dt_TotalTime);
            return dt_TotalTime.TimeOfDay;
        }
        public static int CalculateAge(DateTime dOB)
        {
            int age = 0;
            age = Common.GetCurrentDateTime().Year - dOB.Year;
            if (Common.GetCurrentDateTime().DayOfYear < dOB.DayOfYear)
                age = age - 1;

            return age;
        }

        public static List<T> ConvertDataTable<T>(DataTable dt)
        {
            List<T> data = new List<T>();
            foreach (DataRow row in dt.Rows)
            {
                T item = GetItem<T>(row);
                data.Add(item);
            }
            return data;
        }
        public static T GetItem<T>(DataRow dr)
        {
            Type temp = typeof(T);
            T obj = Activator.CreateInstance<T>();

            foreach (DataColumn column in dr.Table.Columns)
            {
                foreach (PropertyInfo pro in temp.GetProperties())
                {
                    if (pro.Name == column.ColumnName)
                        if ((dr[column.ColumnName] != DBNull.Value))
                        {
                            pro.SetValue(obj, dr[column.ColumnName], null);
                        }
                        else
                            continue;
                }
            }
            return obj;
        }




        #endregion

        #region ExceptionLog

        public static void Log(int Userid, string ViewName, string MethodName, string Message, bool isException)
        {
            ExceptionLog(Userid, ViewName, MethodName, Message, isException, Common.GetCurrentDateTime());
        }


        public static void ExceptionLog(int Userid, string ViewName, string MethodName, string Message, bool isException, DateTime CreatedDate)
        {
            Message = "isLiveException: " + ConfigurationManager.AppSettings["isLive"].ToString() + " " + Environment.NewLine + " " + Message;
            Common.TxtFileLog(Userid, ViewName, MethodName, Message, isException, CreatedDate);
        }

        public static void TxtFileLog(int Userid, string ViewName, string MethodName, string Message, bool isException, DateTime CreatedDate)
        {
            string txtbody = " Exception Log: UserID: " + Userid + " View: " + ViewName + " Method: " + MethodName + " Message: " + Message + " isException: " + isException + " CreatedDate: " + CreatedDate + ".";

            ErrorHandling.WriteError(txtbody);
        }



        #endregion


        #region Notifications

        public static byte[] HexStringToByteArray(string hex)
        {
            return Enumerable.Range(0, hex.Length)
                             .Where(x => x % 2 == 0)
                             .Select(x => Convert.ToByte(hex.Substring(x, 2), 16))
                             .ToArray();
        }
        public static byte[] StrToByteArray(string str)
        {
            Dictionary<string, byte> hexindex = new Dictionary<string, byte>();
            for (int i = 0; i <= 255; i++)
                hexindex.Add(i.ToString("X2"), (byte)i);

            List<byte> hexres = new List<byte>();
            for (int i = 0; i < str.Length; i += 2)
                hexres.Add(hexindex[str.Substring(i, 2)]);

            return hexres.ToArray();
        }
        public static bool ValidateServerCertificate(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)
        {
            return true;
        }

        #endregion


        #region GetDistanceFrom2LatLong

        public static double GetDistance(double lat1, double lon1, double lat2, double lon2, string unit)
        {
            double theta = lon1 - lon2;
            double dist = Math.Sin(deg2rad(lat1)) * Math.Sin(deg2rad(lat2)) + Math.Cos(deg2rad(lat1)) * Math.Cos(deg2rad(lat2)) * Math.Cos(deg2rad(theta));
            dist = Math.Acos(dist);
            dist = rad2deg(dist);
            dist = dist * 60 * 1.1515;
            if (unit == "K")
            {
                dist = dist * 1.609344;
            }
            else if (unit == "N")
            {
                dist = dist * 0.8684;
            }
            return (dist);
        }

        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        //::  This function converts decimal degrees to radians             :::
        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        public static double deg2rad(double deg)
        {
            return (deg * Math.PI / 180.0);
        }

        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        //::  This function converts radians to decimal degrees             :::
        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        public static double rad2deg(double rad)
        {
            return (rad / Math.PI * 180.0);
        }

        #endregion


    }
}
