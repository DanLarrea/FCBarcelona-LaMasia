class LoginViewModel
{
    constructor($LoginService, $window)
    {
        this.LoginService = $LoginService;
        this.Window = $window;
    }

    Login()
    {
        this.LoginService.LoginAsync(this.Email, this.Password)
            .then((response) => {
                if (response.data !== "") {
                    this.Window.Token = response.data.token;
                    this.Window.LoggedOnUser = response.data;
                }
                else {
                    alert("Usuario incorrecto");
                }
                this.Window.IsLoading = false;
            },
                (error) => {
                    alert(error.data.message);
                    this.Window.Token = null;

                    this.Window.IsLoading = false;
                });
    }
    ShowRegister()
    {
        this.Window.Register = true;
        this.Window.Login = false;
    }
}

app.component('login',
    {
        templateUrl: './Scripts/Views/Start/Login/LoginView.html',
        controller: LoginViewModel,
        controllerAs: "vm"
    });