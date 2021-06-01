app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'landing.template.html'
    })
    .when('/shop',{
        templateUrl:'./shop/shop.template.html',
        controller:'shopController'
    })
    .when('/register',{
        templateUrl:'./register/register.template.html',
        controller:'register'
    })
    .when('/login',{
        templateUrl:'./login/login.template.html',
        controller:'login'
    })
    .when('/cart',{
        templateUrl:'./cart/cart.template.html',
        controller:'cart'
    })


});
