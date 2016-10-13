(function () {
    'use strict';

    angular.module('thePen.AuthorDataApi',[])
        .factory("AuthorDataApi", AuthorDataApi);


    function AuthorDataApi($http) {
        var factory = {
            getAuthorData: getAuthorData
        };

        function getAuthorData (displayUrl){
            return $http({
                method: "get",
                url: "/getAuthor/" + displayUrl,
            }).then(function (response){
                return response.data
            })
        }

        return factory;
    }
})();
