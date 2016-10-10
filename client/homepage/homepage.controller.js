angular.module("thePen.HomepageCtrl", [])

.controller("HomepageCtrl", function($stateParams, $interval, Auth, UserData){
    var vm = this;


    initialize()

    function initialize() {
        vm.userData = UserData.getUserData();

        if ($stateParams.displayUrl === user) {
            vm.pageData = vm.userData;
        } else {
            vm.pageData = {diplayName: "stuff"}
        }
    }

})