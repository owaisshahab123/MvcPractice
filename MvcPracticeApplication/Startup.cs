using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MvcPracticeApplication.Startup))]
namespace MvcPracticeApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
