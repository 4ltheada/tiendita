(function () {

    let app = angular.module('product', []);
    app.controller('Product', ['$scope', '$state', '$stateParams', '$http', function ($scope, $state, $stateParams, $http) {
        let product=this;

        product._id = $stateParams._id
        product.detail = {}
        product.reviews = []
        product.sumStars = 0
        product.avgStars = 0

        product.current = 0

        this.setCurrent = function(i){
            this.current = i || 0
        }

        this.isSet = function(i){
            return i === product.current
        }


        $http.get("./dummy/products.json").then(function(data){
            product.products = data.data.gems

            product.detail = product.products.find(p=> p._id === product._id)

            product.reviews = product.detail.reviews
            product.sumStars = product.reviews.map(item => item.stars).reduce((prev, next) => prev + next)
            product.avgStars = prodcut.sumStars / product.products.length
            //console.log("productDetail", product.detail)
        })

    }])



})();