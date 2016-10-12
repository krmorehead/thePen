(function () {
    'use strict';

    config.$inject = ['$stateProvider'];

    // *
    //  * # About Me Route
    //  * _URL:_ `/`
    //  *
    //  *
     

    function config($stateProvider) {
        $stateProvider.state("homepage.aboutMe", {
            url: "/aboutMe",
            templateUrl:"states/pages/aboutMe.html",
            controller: "AboutMeCtrl as vm"
        })
    }

    angular
        .module('thePen')
        .config(config);

})();
