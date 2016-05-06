

var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("customers.json").then(function (response) {
      $scope.myData = response.data.records;
  });
});

app.controller('tinhtoan', function($scope) {
	;
	$scope.tinh = function(){
		if($scope.name != null){
			document.getElementById("id01").innerHTML = $scope.name;
		}
		if($scope.truong != null){
			document.getElementById("id02").innerHTML = $scope.truong;
		}
		if($scope.vitri != null){
			document.getElementById("id03").innerHTML = $scope.vitri;
		}
		if($scope.hientai != null){
			document.getElementById("id04").innerHTML = $scope.hientai;
		}
		if($scope.previous != null){
			document.getElementById("id05").innerHTML = $scope.previous;
		}
		if($scope.hocvan != null){
			document.getElementById("id06").innerHTML = $scope.hocvan;
		}
	};
});

