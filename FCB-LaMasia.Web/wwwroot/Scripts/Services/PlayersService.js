class PlayersService extends CrudService {
    constructor($http, $window) {
        super($http, $window, 'players');
        this.Http = $http;
        this.Players = 'players';
    }

    GetAllPlayersAsync() {
        return this.GetAll(this.Admins);
    }
    GetPlayerByIdAsync(users) {
        return this.GetByIdAsync(users);
    }
    GetPlayersByMultipleIds(ids) {
        let multipleIds = ids;

        let promises = multipleIds.map((v) => {
            return this.Http.get(this.Url + v)
        });
    }
    AddPlayerAsync(model) {
        return this.AddAsync(model);
    }
    UpdatePlayerAsync(model) {
        return this.PutAsync(model);
    }
    DeletePlayerAsync(model) {
        return this.Delete(model);
    }
}

// esto le dice a Angular que creamos un service que se llama $AdminsService
// para que lo inyecte 
app.service('$PlayersService', PlayersService);