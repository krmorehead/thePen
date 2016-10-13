(function () {
    'use strict';

    angular.module('thePen.AuthorDataApi',[])
        .factory("AuthorDataApi", AuthorDataApi);


    function AuthorDataApi($http) {
        var factory = {
        };

        var getAuthorData = function (displayUrl){
            return $http({
                method: "get",
                url: "/:displayUrl",
            }).then(function (response){
                return response.data
            })
        }

        return factory;
    }
})();
