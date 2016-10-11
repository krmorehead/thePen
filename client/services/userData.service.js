(function () {
    'use strict';

    angular.module('thePen.UserData',[])
        .factory("UserData", UserData);


    function UserData(LocalStorage) {
        var factory = {
            getUserData: getUserData,
            updateUserData: updateUserData
        };
        var userData = LocalStorage.getLocalStore('userData') || {} 

        function getUserData() {
            return userData;
        }

        function updateUserData(newUserData) {
            _.extend(userData, newUserData);
            LocalStorage.setLocalStore('userData', userData);
            return userData;
        }

        return factory;
    }
})();
