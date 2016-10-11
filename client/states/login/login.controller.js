angular.module("thePen.LoginController", [])

.controller("LoginController", function($state, $interval, Auth, UserData){
    var vm = this;
    vm.loginData = {}
    vm.message = ""
    vm.currentPhoto = "resources/books.jpg"
    // var currentPhotoIndex = 0;
    //maybe throw this into the node backend some how? start with a single image and then thrown the others across when the page is ready
    // var photos = [
    // "resources/doubleDating1.jpg",
    // "resources/doubleDating2.jpg",
    // "resources/doubleDating3.jpg",
    // "resources/doubleDating4.jpg"
    // ]

    // $interval(function(){
    //     if(currentPhotoIndex === photos.length - 1){
    //         currentPhotoIndex = 0
    //     } else {
    //         currentPhotoIndex++
    //     }
    //     vm.currentPhoto = photos[currentPhotoIndex]
    // }, 3000)


    vm.createUser = function(){
        if(vm.loginData.createUser){
            checkLoginDetails()

            Auth.createUser(vm.loginData)
            .then(function(response){
                if(response["created"]){
                    console.log("logging in")
                    vm.loginUser()
                } else {
                    vm.message = response.message
                }
            })
        } else {
            vm.loginData.createUser = true
            console.log(vm.loginData)
        }
    }
    

    vm.loginUser = function () {
        Auth.loginUser(vm.loginData)
        .then(function (response) {
            if(response["loggedin"]){
                var userData = UserData.updateUserData(response.userData);
                $state.go('homepage', {displayUrl: userData.displayUrl});
            } else {
                vm.message = response.message
            }
        })
    }

    var checkLoginDetails = function(){
        console.log(vm.loginData)
        if(vm.loginData.primaryEmail && vm.loginData.password){
            //need additional checks for creating an account
            if(vm.loginData.createUser){
                if(vm.loginData.firstName1 && vm.loginData.firstName1) {
                    return true
                }
            //if just login check then already passed
            } else {
                return true
            }
        }
        return false
    }
})