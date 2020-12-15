(function (){

    let app = angular.module('cardproducts',[])

    app.directive('cardProducts', function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/card-products.html',
            controller: function(){
                console.log("card products")
            }
        }
    })
})();