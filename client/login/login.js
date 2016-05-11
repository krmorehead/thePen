angular.module("coupleFriends.LoginController", [])

.controller("LoginController", function($scope, $interval, Auth){
  $scope.loginData = {}
  $scope.message = ""
  $scope.currentPhoto = "resources/doubleDating1.jpg"
  var currentPhotoIndex = 0;
  //maybe throw this into the node backend some how? start with a single image and then thrown the others across when the page is ready
  var photos = [
  "resources/doubleDating1.jpg",
  "resources/doubleDating2.jpg",
  "resources/doubleDating3.jpg",
  "resources/doubleDating4.jpg"
  ]

  $interval(function(){
    if(currentPhotoIndex === photos.length - 1){
      currentPhotoIndex = 0
    } else {
      currentPhotoIndex++
    }
    $scope.currentPhoto = photos[currentPhotoIndex]
  }, 3000)


  $scope.createAccount = function(){
    if($scope.loginData.createAccount){
      console.log("creating Account", checkLoginDetails())

      // Auth.createUser($scope.loginData)
      // .then(function(response){
      //   if(response["created"]){
      //     console.log("logging in")
      //     $scope.loginUser()
      //   } else {
      //     $scope.message = response.message
      //   }
      // })
    } else {
      $scope.loginData.createAccount = true
      console.log($scope.loginData)
    }
  }
  

  $scope.loginUser = function () {
    Auth.loginUser($scope.loginData)
    .then(function (response) {
      if(response["loggedin"]){
        // userData.updateUserData(response.userData)
        $location.path("/stream")
      } else {
        $scope.message = response.message
      }
    })
  }

  var checkLoginDetails = function(){
    console.log($scope.loginData)
    if($scope.loginData.primaryEmail && $scope.loginData.password){
      //need additional checks for creating an account
      if($scope.loginData.createAccount){
        if($scope.loginData.firstName1 && $scope.loginData.firstName1) {
          return true
        }
      } else {
        //if just login check then already passed
        return true
      }
    }
    return false
  }
})