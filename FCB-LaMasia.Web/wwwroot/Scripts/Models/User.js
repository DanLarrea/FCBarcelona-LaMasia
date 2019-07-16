class User extends Entity
{
    constructor(json)
    {
        super(json);

        if (json)
        {
            this.Name = json.name;
            this.Lastname = json.lastname;
            this.Age = json.age;
            this.Nationality = json.nationality;
            this.Email = json.email;
            this.Password = json.password;
        }
        else
        {
            this.Name = "";
            this.Lastname = "";
            this.Age = 0;
            this.Nationality = "";
            this.Email = "";
            this.Password = "";
        }
    }
}