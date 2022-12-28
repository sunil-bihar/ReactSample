using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ATSWebAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class Login : ControllerBase
    {
        [HttpGet]
        public object CheckLogin(LoginML login)
        {
            try
            {


                if (login != null && login.UserName == "User" && login.Password == "Password")
                {
                    return Ok("Login Success");
                }
                else
                {
                    return NotFound("User not found in the system");
                }
            }
            catch (Exception ex)
            {
                return NotFound("User not found in the system");
            }
        }
    }

    public class LoginML
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
