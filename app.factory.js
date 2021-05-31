app.factory("DataFac", function ($http, $q) {
    let self = this;
    let products;
    let category='all';
    self.data = [];
    self.reset = function () {
      this.data = [];
    };
    self.loggedUser;
    self.getloggedUser=function()
    {
        return self.loggedUser;
    }
    self.setloggedUser=function(index)
    {
        self.loggedUser=index;
    }
    let getData=function()
    {
        if(products) {
            console.log("api not called",products);
            return products;
        } else {
            return $http.get('https://fakestoreapi.com/products').then(function(response){
                products = response.data;
                console.log("Api Called",products);
                return products;
            });
    }
    }
    return {
      reset: self.reset,
      data: self.data,
      getloggedUser:self.getloggedUser,
      setloggedUser:self.setloggedUser,
      getData:getData,
      category:category
    };
  });