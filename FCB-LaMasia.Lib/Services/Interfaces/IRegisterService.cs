using FCB_LaMasia.Lib.Services.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace FCB_LaMasia.Lib.Services.Interfaces
{
    public interface IRegisterService
    {
        RegisterResponse Register(RegisterRequest registerRequest);
    }
}
