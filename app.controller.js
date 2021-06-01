app.controller('main',function($location,$scope,DataFac)
{
    
    $scope.isActive=function(viewLocation){
        return viewLocation===$location.path();
    }
    $scope.loggedOut=function()
    {
      let status=DataFac.getloggedUser()+1;
      if(!status)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    $scope.logOut=function()
    {
      DataFac.setloggedUser(undefined);
      $location.path("/");
    }
})
