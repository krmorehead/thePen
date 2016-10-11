(function () {
    'use strict';

    angular.module('thePen.Settings',[])
        .factory("Settings", Settings);


    function Settings(LocalStorage) {
        var factory = {
            getSettings: getSettings,
            updateSettings: updateSettings
        };
        // default settings
        var Settings = {
            menuBar: {
                'background-color' : 'rgba(245, 241, 222, 0.8)',
                'color': 'rgb(20,20,20)',
                'text-shadow': '4px 4px 2px rgba(200, 200, 200, 1)'
            },
            canvas: {
                'background-image' : 'url("/resources/theWalk.jpg")',
                'overflow' : 'hidden'
            }, 
            tabs: {
                'color': 'rgb(20,20,20)',
                'text-shadow': '4px 4px 2px rgba(200, 200, 200, 1)'
            }
        }

        function getSettings() {
            return Settings;
        }

        function updateSettings(newSettings) {
            _.extend(Settings, newSettings);
            return Settings;
        }

        return factory;
    }
})();
