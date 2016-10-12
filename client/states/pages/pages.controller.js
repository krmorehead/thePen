angular.module("thePen.StoriesCtrl", [])

.controller("StoriesCtrl", StoriesCtrl);

function StoriesCtrl($scope, $stateParams, $state, AuthorData, UserData){
    var vm = this;
    vm.stateSlug = $stateParams.page;
    vm.editMode = false;
    vm.isDirty = false;

    initialize()


    function initialize() {
        vm.userData = UserData.getUserData();

        vm.pageData = AuthorData.getPageData(vm.stateSlug);
        vm.onOwnPage = vm.userData.id === AuthorData.getAuthorData().id;
        $scope.$watch("vm.pageData", function(){
            if (vm.editMode) {
                vm.isDirty = true;
            }
        }, true);
    }

}