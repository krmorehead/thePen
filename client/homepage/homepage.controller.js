angular.module("thePen.HomepageCtrl", [])

.controller("HomepageCtrl", function($stateParams, $interval, Auth, UserData, Settings, AuthorData){
    var vm = this;


    initialize()

    function initialize() {
        vm.userData = UserData.getUserData();
        vm.settings = Settings.getSettings();

        vm.authorData = AuthorData.getAuthorData($stateParams.displayUrl)
    }

})