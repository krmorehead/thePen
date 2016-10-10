(function () {
    'use strict';

    config.$inject = ['$stateProvider'];

    /**
     * # Home Route
     * _URL:_ `/`
     *
     * _Directory:_ `app/states/home/home.html`
     *
     * **Landing page after user login,
     * or when the home button is pressed.**
     * @class Quotepad.App.States.Home.route
     */

    function config($stateProvider) {
        $stateProvider.state("login", {
            url: "/login",
            templateUrl:"login/login.html",
            controller: "LoginController"
        })
    }

    angular
        .module('quotepad')
        .config(config);

})();
