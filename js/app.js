var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/rides.html",
      controller: "maincontroller"
    })
    .when("/login", {
      templateUrl: "partials/login.html",
      controller: "maincontroller"
    })
    .otherwise({
      templateUrl: "partials/home.html",
      controller: "maincontroller"
    });

  $locationProvider.html5Mode(true);
});

(function() {
  $(".phone-screen").backstretch("https://projectmillennial.files.wordpress.com/2012/10/6944328029_ad851f454f_h2.jpg");
})();
