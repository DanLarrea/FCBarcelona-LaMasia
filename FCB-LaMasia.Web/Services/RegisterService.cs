using FCB_LaMasia.Lib;
using FCB_LaMasia.Lib.DAL;
using FCB_LaMasia.Lib.Services.Dtos;
using FCB_LaMasia.Lib.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FCB_LaMasia.Lib.Services
{
    public class RegisterService : IRegisterService
    {
        public ILoginService LoginService { get; set; }

        public LaMasiaDBContext DbContext { get; set; }

        public RegisterService(LaMasiaDBContext dbContext, ILoginService loginService)
        {
            DbContext = dbContext;
            LoginService = loginService;
        }


        public virtual RegisterResponse Register(RegisterRequest registerRequest)
        {
            var output = new RegisterResponse();

            if (string.IsNullOrEmpty(registerRequest.Email))
            {
                output.Status = RegisterResponseStatus.MissingEmail;
            }
            else if (!registerRequest.Email.Contains("@"))
            {
                output.Status = RegisterResponseStatus.WrongEmail;
            }
            else if (string.IsNullOrEmpty(registerRequest.Password))
            {
                output.Status = RegisterResponseStatus.MissingPassword;
            }
            else if (registerRequest.Password.Length < 8)
            {
                output.Status = RegisterResponseStatus.PasswordInsecure;
            }

            var player = DbContext.Players.FirstOrDefault(x => x.Email == registerRequest.Email);

            if (player != null)
            {
                output.Status = RegisterResponseStatus.UserWithEmailAlreadyExists;
            }
            else
            {
                player = new Player
                {
                    Name = registerRequest.Name,
                    Lastname = registerRequest.Lastname,
                    Age = registerRequest.Age,
                    Nationality = registerRequest.Nationality,
                    Email = registerRequest.Email,
                    Password = registerRequest.Password
                };

                DbContext.Players.Add(player);
                DbContext.SaveChanges();

                output.Status = RegisterResponseStatus.Ok;

                var loginRequest = new LoginRequest()
                {
                    Email = registerRequest.Email,
                    Password = registerRequest.Password
                };

                output.Player = LoginService.Authenticate(loginRequest) as Player;
            }

            return output;
            
        }
    }
}
