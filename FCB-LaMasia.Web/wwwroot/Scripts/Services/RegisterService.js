class RegisterService extends GenericService {
    constructor($http, $window) {
        super($http, $window, 'register');
    }

    RegisterAsync(name, lastname, dni, phone, email, password) {
        var request = new RegisterRequest(name, lastname, dni, phone, email, password);
        return this.PostAsync(request);
    }
}

// esto le dice a Angular que creamos un service que se llama $UsersService
// para que lo inyecte 
app.service('$RegisterService', RegisterService);