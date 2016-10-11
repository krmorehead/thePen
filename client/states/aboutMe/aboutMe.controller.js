angular.module("thePen.AboutMeCtrl", [])

.controller("AboutMeCtrl", AboutMeCtrl);

function AboutMeCtrl($stateParams, $state, AuthorData){
    var vm = this;
    vm.stateSlug = 'aboutMe';

    initialize()

    function initialize() {
        vm.pageData = AuthorData.getPageData(vm.stateSlug);
    }

}