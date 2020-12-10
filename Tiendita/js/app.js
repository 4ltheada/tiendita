(function(){
    
    let app = angular.module('fStore',['ui.router', 'ui.router.state.events', 'landing']);
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider){
        $stateProvider.state('landing', {
            url: '/landing',
            templateUrl: 'partials/landing.html',
            controller: 'Landing' 
        });

        $urlRouterProvider.otherwise('/landing')
        $locationProvider.html5Mode(false)
    }]);



})();