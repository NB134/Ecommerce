app
  .controller("register", function ($scope, $location) {
    
    $scope.Register=function()
    {
        console.log('regsiter submit');
        $location.path("/shop");
    }
  });