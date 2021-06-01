app
  .controller("cart", function ($scope, DataFac) {
    let uIndex=DataFac.getloggedUser();
    let user=DataFac.data[uIndex];
    $scope.products=user.cart;
  });