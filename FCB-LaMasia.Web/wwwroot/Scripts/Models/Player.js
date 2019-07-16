class Player extends User
{
    constructor(json)
    {
        if (json)
        {
            this.Position = json.position;
            this.Height = json.height;
            this.Weight = json.weight;
            this.Team = json.team;
        }
        else
        {
            this.Position = "";
            this.Height = 0;
            this.Weight = 0;
            this.Team = "";
        }
    }
}