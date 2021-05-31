app.controller('shopController',function($scope,DataFac )
{
    $scope.products=DataFac.getData();
    let pro=$scope.products;
    let cateProducts=pro.filter(function(product){
        if(DataFac.category==='all')
        {
            return true;
        }
        else
        {
            if(product.category===DataFac.category)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    })
    $scope.products=cateProducts;
    console.log($scope.products);
});