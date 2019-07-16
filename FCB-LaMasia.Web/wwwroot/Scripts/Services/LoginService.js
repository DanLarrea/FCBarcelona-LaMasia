class LoginService extends GenericService {
    constructor($http, $window) {
        super($http, $window, 'login');
    }

    LoginAsync(email, password) {
        var request = new LoginRequest(email, password);
        return this.PostAsync(request);
    }
}

// esto le dice a Angular que creamos un service que se llama $UsersService
// para que lo inyecte 
app.service('$LoginService', LoginService);