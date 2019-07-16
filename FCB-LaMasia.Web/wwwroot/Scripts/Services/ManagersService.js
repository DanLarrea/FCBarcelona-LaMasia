class ManagersService extends CrudService
{    
    constructor($http, $window) {
        super($http, $window, 'managers');
        this.Http = $http;
        this.Managers = 'managers';
    }

    GetAllManagersAsync() {
        return this.GetAll(this.Admins);
    }
    GetManagerByIdAsync(users) {
        return this.GetByIdAsync(users);
    }
    GetManagersByMultipleIds(ids) {
        let multipleIds = ids;

        let promises = multipleIds.map((v) => {
            return this.Http.get(this.Url + v)
        });
    }
    AddManagerAsync(model) {
        return this.AddAsync(model);
    }
    UpdateManagerAsync(model) {
        return this.PutAsync(model);
    }
    DeleteManagerAsync(model) {
        return this.Delete(model);
    }
}

// esto le dice a Angular que creamos un service que se llama $AdminsService
// para que lo inyecte 
app.service('$ManagersService', ManagersService);