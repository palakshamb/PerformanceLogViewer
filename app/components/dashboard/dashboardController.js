logViewerApp.controller('dashboardController', ['$scope', 'logFileServices', function ($scope, logFileServices) {
    var dashboardViewModel = {
        applicationName: "BESILYQ",
        situations: [{
            situationId: 123456,
            sessions: [
                {
                    SessionName: "Test Sessoin Name 1", "ThreadsDetails": [
                    {
                        "ThreadName": "Thread [READER_1_1_1]",
                        "ThreadType": "READER_1_1_1",
                        "BusyPercentage": 95.00
                    },
                    {
                        "ThreadName": "Thread [TRANSF_1_1_1]",
                        "ThreadType": "TRANSF_1_1_1",
                        "BusyPercentage": 95.00
                    }
                    ]
                },
            {
                SessionName: "Test Sessoin Name 2", "ThreadsDetails": [
                {
                    "ThreadName": "Thread [READER_1_1_1]",
                    "ThreadType": "READER_1_1_1",
                    "BusyPercentage": 95.00
                },
                {
                    "ThreadName": "Thread [TRANSF_1_1_1]",
                    "ThreadType": "TRANSF_1_1_1",
                    "BusyPercentage": 95.00
                }
                ]
            }]
        },
        {
            situationId: 987654,
            sessions: [
                {
                    SessionName: "Test Sessoin Name 3", "ThreadsDetails": [
                    {
                        "ThreadName": "Thread [READER_1_1_1]",
                        "ThreadType": "READER_1_1_1",
                        "BusyPercentage": 95.00
                    },
                    {
                        "ThreadName": "Thread [TRANSF_1_1_1]",
                        "ThreadType": "TRANSF_1_1_1",
                        "BusyPercentage": 95.00
                    }
                    ]
                },
            {
                SessionName: "Test Sessoin Name 4", "ThreadsDetails": [
                {
                    "ThreadName": "Thread [READER_1_1_1]",
                    "ThreadType": "READER_1_1_1",
                    "BusyPercentage": 95.00
                },
                {
                    "ThreadName": "Thread [TRANSF_1_1_1]",
                    "ThreadType": "TRANSF_1_1_1",
                    "BusyPercentage": 95.00
                }
                ]
            }]
        }]
    };
    $scope.Model = dashboardViewModel;
}]);