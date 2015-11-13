

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/snakeplant', {
            templateUrl: "/assets/views/routes/snakeplant.html"
        }).
        when('/peacelily', {
        templateUrl: "/assets/views/routes/peacelily.html"
    }).
    when('/bostonfern', {
        templateUrl: "/assets/views/routes/bostonfern.html"
    }).
    when('/arecapalm', {
        templateUrl: "/assets/views/routes/arecapalm.html"
    }).
    when('/spiderplant', {
        templateUrl: "/assets/views/routes/spiderplant.html"
    }).
    when('/references', {
        templateUrl: "/assets/views/routes/references.html"
    }).
        otherwise({
            redirectTo: 'snakeplant'
        })
}]);


