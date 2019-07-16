class IndexViewModel
{
    constructor($http, $window)
    {
        this.Window = $window;
    }
    IsLoggedOn() {
        if (!this.Window || this.Window.LoggedOnUser === null || this.Window.LoggedOnUser === undefined)
            return false;
        else
            return true;
    }

    IsStartVisible() {
        let c1 = !this.IsLoggedOn();
        let c2 = !this.Window.IsLoading;
        return c1 && c2;
    }

    IsLoading() {
        return this.Window.IsLoading;
    }


};

app.component('index',
    {
        templateUrl: './Scripts/Views/IndexView.html',
        controller: IndexViewModel,
        controllerAs: "vm"
    });