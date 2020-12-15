(function (){

    let app = angular.module('carouselproducts',[])

    app.directive('carouselProducts', function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/carousel-products.html',
            controller: function(){
                console.log("carousel products")
            }
        }
    })
})();