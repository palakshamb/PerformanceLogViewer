logViewerApp.controller("searchController", ['$scope', 'logFileServices', function ($scope, logFileServices) {
    $scope.Model = {
        PresetSearchText: logFileServices.getAppName()
    };
}]);