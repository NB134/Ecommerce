app.controller("categories",function($scope,DataFac, $location){
    $scope.selectCategory= function(cat)
    {
        console.log(cat);
        switch (cat) {
            case 0:
                DataFac.category="electronics";

                break;
            case 1:
                DataFac.category="jewelery";
                break;
            case 2:
                DataFac.category="men's clothing";
                break;
            case 3:
                DataFac.category="women's clothing";
                break;        
            default:
                break;
        }
        $location.path("/shop")
    }
});