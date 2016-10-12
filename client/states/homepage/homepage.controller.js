angular.module("thePen.HomepageCtrl", [])

.controller("HomepageCtrl", function($stateParams, $interval, $state, $document, Auth, UserData, Settings, AuthorData){
    var vm = this;
    vm.go = go;

    initialize()

    function initialize() {
        vm.userData = UserData.getUserData();
        vm.settings = Settings.getSettings();

        vm.authorData = AuthorData.getAuthorData($stateParams.displayUrl)
    }
    function go(slug) {
        $state.go("homepage." + slug)
    }
})