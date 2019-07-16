class HomeViewModel
{
    constructor()
    {

    }
}

app.component('home',
    {
        templateUrl: './Scripts/Views/Home/HomeView.html',
        controller: HomeViewModel,
        controllerAs: "vm"
    });