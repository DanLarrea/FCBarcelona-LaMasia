using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace FCB_LaMasia.Lib
{
    public class Player : User
    {
        public enum Position
        { Goalkeeper,
            Defender,
            Midfielder,
            Forward }
        public float Height { get; set; }
        public float Weight { get; set; }
        public Guid TeamId { get; set; }
        [JsonIgnore]
        public Team Team { get; set; }
    }
}
