angular.module('thePen.Services',[])

  .factory("Auth", function ($http) {
    var createUser = function(userData){
      delete userData.createUser
      console.log(userData, "userdata")
      return $http({
        method: "POST",
        url: "/createUser",
        data: userData
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