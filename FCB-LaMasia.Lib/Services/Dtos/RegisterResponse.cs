using System;
using System.Collections.Generic;
using System.Text;

namespace FCB_LaMasia.Lib.Services.Dtos
{
    public class RegisterResponse
    {
        public RegisterResponseStatus Status { get; set; }
        public Player Player { get; set; }
    }

    public enum RegisterResponseStatus
    {
        Ok,
        UserWithEmailAlreadyExists,
        WrongEmail,
        MissingEmail,
        MissingPassword,
        PasswordInsecure
    }
}
