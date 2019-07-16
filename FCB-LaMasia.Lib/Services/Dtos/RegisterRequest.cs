using System;
using System.Collections.Generic;
using System.Text;

namespace FCB_LaMasia.Lib.Services.Dtos
{
    public class RegisterRequest
    {
        public string Name { get; set; }
        public string Lastname { get; set; }
        public int Age { get; set; }
        public string Nationality { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
