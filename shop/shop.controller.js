app.controller("shopController", function ($scope, DataFac, $http) {

  $http
    .get("https://fakestoreapi.com/products/categories")
    .then(function (response) {
      $scope.categories = response.data;
      $scope.categories.push("all");
    });
  $scope.sortBy = ["desc", "asc"];
  $scope.category = "all";
  $scope.sort = "asc";
  $scope.SelectCat = function () {
      let url;
      if($scope.category==="all")
      {
          url=`https://fakestoreapi.com/products?sort=${$scope.sort}`;
      }
      else
      {
        url = `https://fakestoreapi.com/products/category/${$scope.category}?sort=${$scope.sort}`; 
      }
    $http.get(url).then(function(response){
        console.log(response);
        $scope.products = response.data;
    });
  };
  $scope.order=function()
  {
      if($scope.sort==='asc')
      {
        //   console.log("asc");
          $scope.reverse=false;
      }
      else{
        //   console.log("descend");
          $scope.reverse=true;
      }
  }
    $scope.SelectCat();
  $scope.addToCart=function(index){
      console.log(index);
    let product=$scope.products[index-1];
    let uIndex=DataFac.getloggedUser();
    let user=DataFac.data[uIndex];
    // console.log(uIndex);
    if(user.cart)
    {
        // console.log("cart Exists");
        let pindex=user.cart.findIndex((x) => {
            if (
              x.id === product.id
            ) {
                let q=x.quantity;
                console.log(q);
                    x.quantity=q+1;
                    // console.log("x",x.id," product",product.id);
              return true;
            } else {
              return false;
            }
          });
        //   console.log("pindex",pindex);
          if(pindex == -1)
          {
              product.quantity=1;
            user.cart.push(product);
          }
    }
    else
    {
        user.cart=[];
        product.quantity=1;
        user.cart.push(product);
    }
   
   console.log(user.cart);
  }
});
