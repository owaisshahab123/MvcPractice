using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace ViewModel.Model
{
    public class HttpApi
    {
        public static WebHeaderCollection SetRequestHeader()
        {
            WebHeaderCollection header = new WebHeaderCollection();
            header.Add("Token", "abc");
            return header;
        }

        public static string CreateRequest(string URL)
        {
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            string response = "";
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(URL);
            request.Method = "GET";
            request.ContentType = "application/json";
            try
            {
                WebResponse webResponse = request.GetResponse();
                using (Stream webStream = webResponse.GetResponseStream())
                {
                    if (webStream != null)
                    {
                        using (StreamReader responseReader = new StreamReader(webStream))
                        {
                            response = responseReader.ReadToEnd();
                        }
                    }
                }
                return response;
            }
            catch (Exception e)
            {
                return (e.Message);
            }
        }

        public static string CreateRequest(string URL, object obj)
        {

            string DATA = JsonConvert.SerializeObject(obj);
            string response = "";
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(URL);
            request.Method = "POST";
            request.ContentType = "application/json";
            request.ContentLength = DATA.Length;
            using (Stream webStream = request.GetRequestStream())
            using (StreamWriter requestWriter = new StreamWriter(webStream, System.Text.Encoding.ASCII))
            {
                requestWriter.Write(DATA);
            }

            try
            {
                WebResponse webResponse = request.GetResponse();
                using (Stream webStream = webResponse.GetResponseStream())
                {
                    if (webStream != null)
                    {
                        using (StreamReader responseReader = new StreamReader(webStream))
                        {
                            response = responseReader.ReadToEnd();
                        }
                    }
                }
                return response;
            }
            catch (Exception e)
            {
                return (e.Message);
            }

        }
    }
}