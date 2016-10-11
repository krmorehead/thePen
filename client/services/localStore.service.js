(function () {
    'use strict';

    angular.module('thePen.LocalStorage',[])
        .factory("LocalStorage", LocalStorage);


    function LocalStorage($window) {
        var factory = {
            getLocalStore: getLocalStore,
            setLocalStore: setLocalStore,
            removeLocalItem: removeLocalItem
        };

        function getLocalStore(key) {
            return JSON.parse($window.localStorage.getItem(key));
        }

        function setLocalStore(key, value) {
            value = JSON.stringify(value);
            $window.localStorage.setItem(key, value);
        }

        function removeLocalItem(key) {
            $window.localStorage.removeItem(key);
        }

        return factory;
    }
})();


