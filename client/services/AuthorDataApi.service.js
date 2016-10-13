(function () {
    'use strict';

    angular.module('thePen.AuthorDataApi',[])
        .factory("AuthorDataApi", AuthorDataApi);


    function AuthorDataApi($http) {
        var factory = {
            getAuthorData: getAuthorData,
            addPages: addPages
        };

        function getAuthorData(displayUrl){
            return $http({
                method: "get",
                url: "/getAuthor/" + displayUrl,
            }).then(function (response){
                return response.data
            })
        }

        function addPages(displayUrl, pages) {
            return $http({
                method: "POST",
                url: "/addPages",
                data: {
                    displayUrl: displayUrl,
                    pages: pages
                }
            }).then(function (response){
                return response.data
            })
        }

        return factory;
    }
})();
