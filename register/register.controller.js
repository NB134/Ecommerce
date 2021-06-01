app
  .controller("register", function ($scope, $location, DataFac) {
    $scope.User={};
    $scope.Register=function()
    {
      if ($scope.registerForm.$valid)
      {
        DataFac.data.push($scope.User);
        let index=DataFac.data.length-1;
        console.log(index);
        DataFac.setloggedUser(index);
        $location.path("/shop");
      }
      else
      {
        console.log("Check form Values")
      }
    }
  });