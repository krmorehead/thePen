angular.module("thePen.HomepageCtrl", [])

.controller("HomepageCtrl", function($stateParams, $interval, $state, $document, Auth, UserData, Settings, AuthorData,
                                    AuthorDataApi){
    var vm = this;
    vm.go = go;

    initialize()

    function initialize() {
        vm.userData = UserData.getUserData();
        vm.settings = Settings.getSettings();
        AuthorData.getAuthorData($stateParams.displayUrl)
        .then(function (authorData) {
            vm.authorData = authorData;
        })

    }
    function go(page) {
        var state = page.template || page.slug;
        $state.go("homepage." + page.template, {page: page.slug});
    }
})