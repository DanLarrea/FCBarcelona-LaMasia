using FCB_LaMasia.Lib;
using FCB_LaMasia.Lib.DAL;
using FCB_LaMasia.Lib.Services.Dtos;
using FCB_LaMasia.Lib.Services.Interfaces;
using System;
using System.Linq;

namespace FCB_LaMasia.Lib.Services
{
    public class SimpleLoginService : ILoginService
    {
        LaMasiaDBContext DbContext { get; set; }

        public SimpleLoginService(LaMasiaDBContext dbContext)
        {
            DbContext = dbContext;
        }

        public virtual User Authenticate(LoginRequest loginRequest)
        {
            if (DbContext.Managers.Count() == 0)
            {
                DbContext.Managers.Add(new Manager()
                {
                    Id = Guid.NewGuid(),
                    Email = "s@s",
                    Password = "1234",
                    Name = "sys"
                });

                DbContext.SaveChanges();
            }

            var user = DbContext.Users.FirstOrDefault(x => x.Email == loginRequest.Email && x.Password == loginRequest.Password);            

            return user;
        }
    }
}
