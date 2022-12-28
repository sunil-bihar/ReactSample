using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ATSWebAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class Home : ControllerBase
    {
        [HttpGet]
        public object GetHome()
        {
            var UserMSID = HttpContext.User.Identity?.Name?.Replace("MS\\", "");
            HomeML home = new HomeML()
            {
                Name = "Home",
                Description = "Home details",
                UserName = UserMSID
            };

            return Ok(home);
        }
    }

    public class HomeML
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string UserName { get; set; }
    }
}
