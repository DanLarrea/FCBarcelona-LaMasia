class StartViewModel
{
    constructor($window)
    {
        this.Window = $window;
        this.Window.Login = true;
    }
    IsLoginVisible()
    {
        return this.Window.Login;
    }
    IsRegisterVisible()
    {
        return this.Window.Register;
    }
}

app.component('start',
    {
        templateUrl: './Scripts/Views/Start/StartView.html',
        controller: StartViewModel,
        controllerAs: "vm"
    });