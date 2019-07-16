class RegisterViewModel
{
    constructor($window, $RegisterService)
    {
        this.RegisterService = $RegisterService;
        this.Window = $window;
    }
    Register()
    {
        this.RegisterService.RegisterAsync(this.Name, this.Lastname, this.Dni, this.Phone, this.Email, this.Password)
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
    };

    ShowLogin()
    {
        this.Window.Login = true;
        this.Window.Register = false;
    };
}

app.component('register',
    {
        templateUrl: './Scripts/Views/Start/Register/RegisterView.html',
        controller: RegisterViewModel,
        controllerAs: "vm"
    });