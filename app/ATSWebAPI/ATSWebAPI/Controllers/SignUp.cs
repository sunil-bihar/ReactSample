using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ATSWebAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SignUp : ControllerBase
    {
        [HttpGet]
        public object Register(SignupML signup)
        {
            if (signup != null && signup.Password == signup.ConfirmPassword)
            {
                return Ok("Success");
            }
            else
            {
                return NotFound("Invalid");
            }
        }
    }

    public class SignupML
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
