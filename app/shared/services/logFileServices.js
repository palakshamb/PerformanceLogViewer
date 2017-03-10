logViewerApp.factory('logFileServices', ['$http', function ($http) {
    var logFileServie = {
        logFileRequestOptions: {
            method: 'GET',
            url: 'http://192.212.16.35/Account/GetLogFile',
            headers: {
                'Content-Type': 'Json/text'
            },
            successCallback: undefined,
            errorCallback: undefined,
        },
        getLogFile: function () {
            $http(logFileRequestOptions).then(function successCallback(response) {
                if (successCallback != undefined)
                    successCallback(response);
                else {
                    logFileServie.defaultSuccessCallback(response);
                }
            }, function errorCallback(response) {
                if (errorCallback != undefined)
                    errorCallback(response);
                else {
                    logFileServie.defaultErrorCallback(response);
                }
            });
        },
        defaultSuccessCallback: function (response) {
            console.log("Success:logFileServices");
            console.log("response");
            console.log(response);
        },
        defaultErrorCallback: function (response) {
            console.log("Error:logFileServices");
            console.log("logFileRequestOptions");
            console.log(logFileServie.logFileRequestOptions);
            console.log("response");
            console.log(response);
        },
        getAppName: function () {
            return "Just testing the angular services";
        }
    };
    return logFileServie;
}]);