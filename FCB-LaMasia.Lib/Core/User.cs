using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace FCB_LaMasia.Lib
{
    public class User : Entity
    {
        public string Name { get; set; }
        public string Lastname { get; set; }
        public int Age { get; set; }
        public string Nationality { get; set; }
        public string Email { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        public string Token { get; set; }

    }
}
