angular.module("coupleFriends.LoginController", [])

.controller("LoginController", function($scope, $interval){
  // $scope.loginData = {}
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
      console.log("createAccount")
    } else {
      $scope.loginData.createAccount = true
      console.log($scope.loginData)
    }
  }

  var checkLoginDetails = function(){
    if($scope.loginData.createAccount){

    } else {

    }
  }
})