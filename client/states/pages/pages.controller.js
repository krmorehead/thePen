angular.module("thePen.StoriesCtrl", [])

.controller("StoriesCtrl", StoriesCtrl);

function StoriesCtrl($stateParams, $state, AuthorData, UserData){
    var vm = this;
    vm.stateSlug = $stateParams.page;

    initialize()

    function initialize() {
        vm.userData = UserData.getUserData();

        vm.pageData = AuthorData.getPageData(vm.stateSlug);
        vm.onOwnPage = vm.userData.id === AuthorData.getAuthorData().id;
    }

}