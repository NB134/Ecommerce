app
  .controller("login", function ($scope, $location, DataFac) {
    $scope.logIn = function () {
        console.log("login subit");
            DataFac.setloggedUser(0);
            $location.path("/shop");
    };
  });
