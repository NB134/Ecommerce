app.controller('main',function($location,$scope,DataFac)
{
    $scope.products=DataFac.getData();
    $scope.isActive=function(viewLocation){
        return viewLocation===$location.path();
    }
})
