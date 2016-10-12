angular.module("thePen.HomepageCtrl", [])

.controller("HomepageCtrl", function($stateParams, $interval, $state, $document, Auth, UserData, Settings, AuthorData){
    var vm = this;
    vm.go = go;

    initialize()

    function initialize() {
        vm.userData = UserData.getUserData();
        vm.settings = Settings.getSettings();

        vm.authorData = AuthorData.getAuthorData($stateParams.displayUrl)
        fillMenuBackground()
    }
    function go(slug) {
        $state.go("homepage." + slug)
    }

    function fillMenuBackground() {
        console.log(angular.element(document.querySelector('#menu'))[0].offsetHeight)
        setTimeout(function(){
            console.log(angular.element(document.querySelector('#menu'))[0].offsetHeight)
        },1000)
        vm.settings.menuFill = {
            'height': angular.element(document.querySelector('#menu')).scrollHeight + 'px'
        }
    }

})