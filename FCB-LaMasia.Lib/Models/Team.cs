using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FCB_LaMasia.Lib
{
    public class Team : Entity
    {
        public string Code { get; set; }
        public enum Category
        { PrimerEquipo,
            BarcaB,
            Femenino,
            Juvenil,
            Cadete }
        public string Venue { get; set; }
        public Manager Manager { get; set; }
        [JsonIgnore]
        public ICollection<Player> Players { get; set; }

        public List<Guid> PlayerIds
        {
            get
            {
                return Players == null ? new List<Guid>() : Players.Select(x => x.Id).ToList();
            }
        }
        public Coach Coach { get; set; }
    }
}
