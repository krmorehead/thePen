(function () {
    'use strict';

    config.$inject = ['$stateProvider'];

    // *
    //  * # Home Route
    //  * _URL:_ `/`
    //  *
    //  * _Directory:_ `app/states/home/home.html`
    //  *
    //  * **Landing page after user login,
    //  * or when the home button is pressed.**
    //  * @class Quotepad.App.States.Home.route
     

    function config($stateProvider) {
        $stateProvider.state("homepage", {
            url: "/:displayUrl",
            templateUrl:"homepage/homepage.html",
            controller: "HomepageCtrl"
        })
    }

    angular
        .module('thePen')
        .config(config);

})();
