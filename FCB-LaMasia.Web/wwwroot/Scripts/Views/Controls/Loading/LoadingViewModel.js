class LoadingViewModel {
    constructor() {

    }
}
app.component('loading',
    {
        templateUrl: './Scripts/Views/Controls/Loading/LoadingView.html',
        controller: LoadingViewModel,
        controllerAs: "vm"
    });