using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FCB_LaMasia.Lib;
using FCB_LaMasia.Lib.Services.Dtos;
using FCB_LaMasia.Lib.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FCB_LaMasia.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        ILoginService _loginService { get; set; }

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        // POST: api/Login
        [HttpPost]
        public async Task<User> Post([FromBody] LoginRequest loginRequest)
        {
            return await Task.Run(() =>
            {
                return _loginService.Authenticate(loginRequest);
            });
        }
    }
}