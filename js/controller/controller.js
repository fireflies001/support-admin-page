app.controller('dashboardController', ['$scope', function($scope){
    $scope.tickets =[];
    $scope.detail = null;
    console.log($scope.detail);
     for(var i = 0; i < details.length; i++) {
         $scope.tickets[i] = {
             "ticket": details[i].title,
             "type" : details[i].Help_topic,
             "index_num": i,
             "date": details[i].date
         };
     }
     $scope.viewValue = function(num) {
        $scope.detail = {
            title: details[num].title,
            date: details[num].date,
            Help_topic: details[num].Help_topic,
            status: details[num].status,
            name: details[num].name,
            mobile_no: details[num].Mobile_no,
            IMEI: details[num].IMEI,
            email: details[num].email,
            department: details[num].department,
            assigned_To: details[num].assigned_To,
            last_reply: details[num].last_reply
        }
        $scope.closePanel = function() {
            $scope.detail = null;
        }
     }
}])

