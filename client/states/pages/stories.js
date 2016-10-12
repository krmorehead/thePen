(function () {
    'use strict';

    config.$inject = ['$stateProvider'];

    // *
    //  * # About Me Route
    //  * _URL:_ `/`
    //  *
    //  *
     

    function config($stateProvider) {
        $stateProvider.state("homepage.pages", {
            url: "/:page",
            templateUrl:"states/pages/aboutMe.html",
            controller: "StoriesCtrl as vm"
        })
    }

    angular
        .module('thePen')
        .config(config);

})();
