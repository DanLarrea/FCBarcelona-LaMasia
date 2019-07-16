class UsersService extends CrudService
{
    constructor($http, $window)
    {
        super($http, $window, 'users');
        this.Http = $http;
        this.Users = 'users';
    }

    GetAllUsersAsync()
    {
        return this.GetAll(this.Users);
    }
    GetUserByIdAsync(users) {
        return this.GetByIdAsync(users);
    }
    GetUsersByMultipleIds(ids) {
        let multipleIds = ids;

        let promises = multipleIds.map((v) => {
            return this.Http.get(this.Url + v)
        });
    }
    AddUserAsync(model) {
        return this.AddAsync(model);
    }
    UpdateUserAsync(model) {
        return this.PutAsync(model);
    }
    DeleteUserAsync(model) {
        return this.Delete(model);
    }
}

// esto le dice a Angular que creamos un service que se llama $UsersService
// para que lo inyecte 
app.service('$UsersService', UsersService);