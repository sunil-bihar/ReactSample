using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ATSWebAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class Team : ControllerBase
    {
        [HttpGet]
        public object GetTeam()
        {
            HomeML home = new HomeML()
            {
                Name = "Team",
                Description = "Team details",
                UserName = "TestName"
            };

            return Ok(home);
        }
    }
}
