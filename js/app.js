var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "pages/login.html"
    })
    .when("/dashboard", {
        templateUrl : "pages/dashboard.html",
        controller: "dashboardController"
    })
    .otherwise({redirectTo: '/'})
});