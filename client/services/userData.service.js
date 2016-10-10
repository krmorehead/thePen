(function () {
    'use strict';

    angular.module('thePen.UserData',[])
        .factory("UserData", UserData);


    function UserData() {
        var factory = {
            getUserData: getUserData,
            updateUserData: updateUserData
        };
        var userData = {}

        function getUserData() {
            return userData;
        }

        function updateUserData(newUserData) {
            _.extend(userData, newUserData);
            return userData;
        }

        return factory;
    }
})();
