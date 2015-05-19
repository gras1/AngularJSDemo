/*##########################################################################

  Normally like to break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look
  example

##########################################################################*/

//This controller retrieves data from the customersService and associ
//The $scope is ultimately bound to the customers view
app.controller('CustomersController', function($scope, customersService) {
    
    //I like to have an init() for controllers that need to perform s
    //one place...not required though especially in the simple exampl
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }

    $scope.insertCustomer = function() {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        customersService.insertAdjacentElement(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function(id) {
        customersService.deleteCustomer(id);
    };
});

//This controller retrieves data from the customersService and associ
//The $scope is bound to the order view
app.controller('CustomerOrdersController', function($scope, $routeParams) {
    $scope.customers = {};
    $scope.ordersTotal = 0.00;

    //I like to have an init() for controllers that need to perform s
    //one place...not required though especially in the simple exampl
    init();

    function init() {
        //Grab customerID off of the route
        var customerID = ($routeParams.customerID) ? parseInt($routeP
        if (customerID > 0) {
            $scope.customer = customersService.getCustomer(customerID);
        }
    }
});