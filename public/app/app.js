'use strict';

(function(){

    var app = angular.module('aogin',['ngRoute']);

    app.config(['$logProvider','$routeProvider', function($logProvider, $routeProvider){

        $logProvider.debugEnabled(true);

        $routeProvider
            .when("/", {

                templateUrl:'/views/login.html',
                controller: 'LoginController',
                controllerAs: 'loginController'
            })

    }]);

})();