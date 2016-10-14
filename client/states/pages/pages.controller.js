angular.module("thePen.StoriesCtrl", [])

.controller("StoriesCtrl", StoriesCtrl);

function StoriesCtrl($scope, $stateParams, $state, AuthorData, UserData){
    var vm = this;
    vm.stateSlug = $stateParams.page;
    vm.editMode = false;
    vm.isDirty = false;
    var displayUrl = $stateParams.displayUrl;

    initialize()


    function initialize() {
        vm.userData = UserData.getUserData();

        AuthorData.getAuthorData($stateParams.displayUrl)
        .then(function (AuthorData){
            vm.AuthorData = AuthorData;
        })

        vm.pageData
        AuthorData.getPageData(displayUrl, vm.stateSlug)
        .then(function (pageData) {
            vm.pageData = pageData;
        })
        
        // vm.onOwnPage = vm.userData.id === AuthorData.getAuthorData().id;
        $scope.$watch("vm.pageData", function(){
            if (vm.editMode) {
                vm.isDirty = true;
            }
        }, true);
    }

}