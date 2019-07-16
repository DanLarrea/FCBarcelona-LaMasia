class PlayersViewModel {
    constructor($PlayersService, $window) {
        this.Players = [];
        this.PlayersSvc = $PlayersService;
        this.Window = $window;
        this.GetAllPlayers();
        this.SelectedPlayer = null;

        this.GridOptions =
            {
                enableFiltering: false,
                data: 'vm.Players',
                appScopeProvider: this,
                columnDefs: [
                    { name: 'Name', field: 'Name' },
                    { name: 'Lastname', field: 'Lastname' },
                    { name: 'Nationality', field: 'Nationality' },
                    { name: 'Age', field: 'Age' },
                    { name: 'Height', field: 'Height' },
                    { name: 'Weight', field: 'Weight' },
                    { name: 'Email', field: 'Email' },
                    { name: '', field: 'Id', cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP"><input type="button" style="width: 80px; background-color: #28a745;" value="Select" ng-click="grid.appScope.SelectPlayer(row.entity)"><input type="button" style="margin-left:10px; width: 80px; background-color: #dc3545;" value="Delete" ng-click="grid.appScope.DeletePlayer(row.entity)"></div>' }
                ]
            };
        this.IsEditing = true;
    }

    GetAllPlayers() {
        this.PlayersSvc.GetAllPlayersAsync()
            .then((response) => {
                this.OnGetData(response);
            });
    }

    OnGetData(response) {
        for (let i in response.data) {
            let jsonPlayer = response.data[i];
            this.Players.push(new Player(jsonPlayer));
        }
    };

    OnPlayerAdded(response) {
        let player = new Player(response.data);
        this.Players.push(player);
    }

    AddNewPlayer() {
        let player = new Player();
        player.Name = this.Name;
        player.Lastname = this.Lastname;
        player.Nationality = this.Nationality;
        player.Age = this.Age;
        player.Height = this.Height;
        player.Weight = this.Weight;
        player.Email = this.Email;
        player.Password = this.Password;

        this.PlayersSvc.AddPlayerAsync(player)
            .then((response) => {
                this.OnPlayerAdded(response),
                    alert("Success for " + response.data.name)
            });
    }

    SelectPlayer(player) {
        this.SelectedPlayer = player;

        this.Name = player.Name;
        this.Lastname = player.Lastname;
        this.Age = player.Age;
        this.Nationality = player.Nationality;
        this.Height = player.Height;
        this.Weight = player.Weight;
        this.Email = player.Email;
        this.Password = player.Password;

        this.IsEditing = false;
    }

    UpdatePlayer() {
        let uptplayer = this.SelectedPlayer;
        uptplayer.Name = this.Name;
        uptplayer.Lastname = this.Lastname;
        uptplayer.Nationality = this.Nationality;
        uptplayer.Age = this.Age;
        uptplayer.Height = this.Height;
        uptplayer.Weight = this.Weight;
        uptplayer.Email = this.Email;
        uptplayer.Password = this.Password;

        //$http PUT function
        this.PlayersSvc.UpdatePlayerAsync(uptplayer)
            .then((response) =>

                alert("Player updated successfully")

            ), ((response) =>

                alert("Error while updating player try again!")

            );
        this.ClearForm();
    }

    CancelUpdate() {
        this.IsEditing = true;
    }

    DeletePlayer(player) {
        var r = this.Window.confirm("Do you want to delete this player?");
        if (r == true) {
            this.PlayersSvc.DeletePlayerAsync(player)
                .then((response) => {
                    var index = this.Players.indexOf(player);
                    this.Players.splice(index, 1);
                    alert("Player deleted successfully");

                }), ((response) => {

                    alert("Error while deleting player try again!");
                });
        }
    }
    ClearForm() {
        this.Name = "";
        this.Lastname = "";
        this.Age = "";
        this.Nationality = "";
        this.Height = "";
        this.Weight = "";
        this.Email = "";
        this.Password = "";

        this.IsEditing = true;
    }
}

app.component('players',
    {
        templateUrl: './Scripts/Views/Home/Players/PlayersView.html',
        controller: PlayersViewModel,
        controllerAs: "vm"
    });