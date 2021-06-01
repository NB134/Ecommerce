app.factory("DataFac", function ($http, $q) {
  let self = this;
  let products;
  let category = "all";
  self.data = [];
  self.reset = function () {
    this.data = [];
  };
  self.loggedUser;
  self.getloggedUser = function () {
    // console.log("get",self.loggedUser);
    return self.loggedUser;
  };
  self.setloggedUser = function (index) {
    self.loggedUser = index;
  };
//   let getData = async function () {
//     if (products) {
//       console.log("api not called", products);
//       return products;
//     } else {
//         const data = await $http.get("https://fakestoreapi.com/products");
//         products=data.data;
//         console.log("api called",products, data);
//         return products;
//     }
//   };
  let getData= function(){
      if(products)
      {
          console.log("Used local data");
          return $q.when(products);
      }
      else
      {
          console.log("Api Called");
          return $http.get("https://fakestoreapi.com/products").then(function(response){
              products=response.data;
              return products;
          });
      }
  }
  return {
    reset: self.reset,
    data: self.data,
    getloggedUser: self.getloggedUser,
    setloggedUser: self.setloggedUser,
    getData: getData,
    category: category,
    products:products
  };
});
