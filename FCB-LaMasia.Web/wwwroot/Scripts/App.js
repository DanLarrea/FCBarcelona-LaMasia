var app = angular.module('FCBLaMasia', ['ngAnimate', 'ngRoute', 'ui.grid', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/login',
        {
            template: '<login></login>'
        });
    $routeProvider.when('/register',
        {
            template: '<register></register>'
        });
    $routeProvider.when('/managers',
        {
            template: '<managers></managers>'
        });
    $routeProvider.when('/coaches',
        {
            template: '<coaches></coaches>'
        });
    $routeProvider.when('/players',
        {
            template: '<players></players>'
        });
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});
