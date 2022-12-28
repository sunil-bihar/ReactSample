using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ATSWebAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class Contact : ControllerBase
    {
        [HttpGet]
        public object GetContact()
        {
            HomeML home = new HomeML()
            {
                Name = "Contact",
                Description = "Contact details",
                UserName = "TestName"
            };

            return Ok(home);
        }
    }
}
