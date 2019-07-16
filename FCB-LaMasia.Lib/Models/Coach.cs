using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace FCB_LaMasia.Lib
{
    public class Coach : User
    {
        public Guid TeamId { get; set; }
        [JsonIgnore]
        public Team Team { get; set; }
    }
}
