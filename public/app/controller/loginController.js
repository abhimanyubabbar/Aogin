'use strict';

(function(){

    angular.module('aogin')
        .controller('LoginController', ['$log', LoginController]);



    function LoginController ($log){

        $log.info("Login Controller Initialized");

        var vm = this;

        vm.data ={
            username: '',
            password:''
        };

        vm.submit = function(){
            $log.debug("Form Submit Called");
            $log.debug(vm.data);

            $log.debug(JSON.stringify(vm.data));
        }
    }


})();