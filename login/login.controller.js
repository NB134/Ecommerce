app
  .controller("login", function ($scope, $location, DataFac) {
    $scope.User={};
    $scope.logIn = function () {
      let index = DataFac.data.findIndex((x) => {
        if (
          x.username === $scope.User.username &&
          x.password === $scope.User.password
        ) {
          return true;
        } else {
          return false;
        }
      });
     if(index !== -1)
     {
      console.log("login subit");
      DataFac.setloggedUser(index);
      console.log("index",index);
      $location.path("/shop");
     }
     else{
       console.log("Not a registered User");
     }
        
    };
  });
