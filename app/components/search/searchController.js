logViewerApp.controller("searchController", ['$scope', 'logFileServices', function ($scope, logFileServices) {
    $scope.Model = {
        SearchText: logFileServices.getAppName(),
        DashboardType: dashboarTypes.Graph.Code
    };

    $scope.ShowSearchOptions = function () {
        Log("SearchText", $scope.Model.SearchText);
        Log("DashboardType", $scope.Model.DashboardType);
        Log("DashboardTypeId", dashboarTypes[$scope.Model.DashboardType].Id);
    }
}]);