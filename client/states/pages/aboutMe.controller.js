angular.module("thePen.AboutMeCtrl", [])

.controller("AboutMeCtrl", AboutMeCtrl);

function AboutMeCtrl($stateParams, $state, AuthorData, UserData){
    var vm = this;
    vm.stateSlug = 'aboutMe';

    initialize()

    function initialize() {
        vm.userData = UserData.getUserData();

        vm.pageData = AuthorData.getPageData(vm.stateSlug);
        vm.onOwnPage = vm.userData.id === AuthorData.getAuthorData().id;
    }

}