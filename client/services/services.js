angular.module('thePen.Services',[])

    .factory("Auth", function ($http) {
        var createUser = function(authorData){
            delete authorData.createUser
            return $http({
                method: "POST",
                url: "/createAuthor",
                data: authorData
            }).then(function (response){
                return response.data
            })
        }

        var loginUser = function (loginData){
            return $http({
                method: "POST",
                url: "/login",
                data: loginData
            }).then(function (response){
                return response.data
            })
        }

        return{
            createUser: createUser,
            loginUser: loginUser
        };
    })