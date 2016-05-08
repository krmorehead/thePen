angular.module("coupleFriends",[
  // "teacherPortal.HomepageController",
  // "teacherPortal.Services",
  "ui.router",
  "angularMoment",
  'ngMaterial',
  'ngMessages',
  "coupleFriends.LoginController"
])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/login");



  $stateProvider 
  // .state("homepage" , {
  //   url:"/homepage",
  //   templateUrl: "homepage/homepage.html",
  //   controller: "HomepageController"
  // })
  .state("login", {
    url: "/login",
    templateUrl:"login/login.html",
    controller: "LoginController"
  })
  // .state("homepage.assignment", {
  //   url:"/:id",
  // })

  // .state("homepageDoc",{
  //   url:"/homepageDoc",
  //   templateUrl: "docs/homepage.html"
  // })
  // .state("app",{
  //   url:"/app",
  //   templateUrl: "docs/app.html"
  // })
  // .state("services",{
  //   url:"/services",
  //   templateUrl: "docs/services.html"
  // })
})
