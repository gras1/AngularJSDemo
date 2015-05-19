/// <reference path="../scripts/angular.min.js" />

/*##########################################################################

  Normally like to break AngularJS apps into the following folder structure
  at a minimum

  /app
    /controllers
    /directives
    /services
    /partials
    /views
############################################################################*/

var app = angular.module('customersApp', []);

//This configures the routes and associates each route with a view an
app.config(function($routeProvider) {
    $routeProvider
        .when('/customers',
        {
            controller: 'CustomersController',
            templateUrl: '/app/partials/customers.html'
        })
        //Define a route that has a route paramter in it (:customerID
        .when('/customerorders/:customerID',
        {
            controller: 'CustomerOrdersController',
            templateUrl: '/app/partials/customerOrders.html'
        })
        //Define a route that has a route parameter in it (:customerID
        .when('/orders',
        {
            controller: 'OrdersController',
            templateUrl: '/app/partials/orders.html'
        })
        .otherwise({ redirectTo: '/customers' });
});