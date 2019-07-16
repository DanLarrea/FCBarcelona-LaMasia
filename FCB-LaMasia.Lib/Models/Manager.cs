using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FCB_LaMasia.Lib
{
    public class Manager : User
    {
        [JsonIgnore]
        public ICollection<Team> Teams { get; set; }
        public List<Guid> TeamsIds
        {
            get
            {
                //if (Lends == null)
                //    return new List<Guid>();
                //else
                //    return Lends.Select(x => x.Id).ToList();

                // esto es lo mismo que lo de arriba pero con el operador ternario
                return Teams == null ? new List<Guid>() : Teams.Select(x => x.Id).ToList();
            }
        }
    }
}
