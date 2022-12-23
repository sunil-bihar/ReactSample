using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ATSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Home : ControllerBase
    {
        [HttpGet]
        public object GetHome()
        {
            HomeML home = new HomeML()
            {
                Name = "Home",
                Description = "Home details",
                UserName = "TestName"
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
