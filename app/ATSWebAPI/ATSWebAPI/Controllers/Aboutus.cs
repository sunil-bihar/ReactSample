using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ATSWebAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class Aboutus : ControllerBase
    {
        [HttpGet]
        public object GetAboutUs()
        {
            HomeML home = new HomeML()
            {
                Name = "About",
                Description = "About details",
                UserName = "TestName"
            };

            return Ok(home);
        }
    }
}
