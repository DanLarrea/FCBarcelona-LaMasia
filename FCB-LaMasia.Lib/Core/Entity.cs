using System;

namespace FCB_LaMasia.Lib
{
    public class Entity
    {
        public Guid Id { get; set; }
        public string EntityType
        {
            get
            {
                return GetType().Name;
            }
        }
    }
}
