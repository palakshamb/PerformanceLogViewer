var logViewerApp = angular.module('logViewerApp', ["ngRoute"]);

logViewerApp.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        controller: "searchController",
        templateUrl: "app/components/search/search.html"
    })
});