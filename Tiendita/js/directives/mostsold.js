(function (){

    let app = angular.module('mostsold',[])

    app.directive('mostSold', function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/most-sold.html',
            controller: function(){
                console.log("most sold")
            }
        }
    })
})();