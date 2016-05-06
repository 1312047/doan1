

var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("customers.json").then(function (response) {
      $scope.myData = response.data.records;
  });
});

app.controller('tinhtoan', function($scope) {
	
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
	$scope.edit = function(){
		$scope.name = document.getElementById("id01").innerHTML;
		$scope.truong = document.getElementById("id02").innerHTML;
		$scope.vitri = document.getElementById("id03").innerHTML;
		$scope.hientai = document.getElementById("id04").innerHTML;
		$scope.previous = document.getElementById("id05").innerHTML;
		$scope.hocvan = document.getElementById("id06").innerHTML;
		
	};
});

app.controller('tinhtoan2', function($scope) {
	
	$scope.edit2 = function(){
		$scope.summary = document.getElementById("id07").innerHTML;
	};
	$scope.tinh2 = function(){
		if($scope.summary != null){
			document.getElementById("id07").innerHTML = $scope.summary; 
		}
	};

	$scope.edit3 = function(){
		$scope.experience = document.getElementById("id08").innerHTML;
	};
	$scope.tinh3 = function(){
		if($scope.experience != null){
			document.getElementById("id08").innerHTML = $scope.experience;
		} 
	};

	$scope.edit4 = function(){
		$scope.projects = document.getElementById("id09").innerHTML;
	};
	$scope.tinh4 = function(){
		if($scope.projects != null){
			document.getElementById("id09").innerHTML = $scope.projects; 
		}
	};

	$scope.edit5 = function(){
		$scope.kinang01 = document.getElementById("id10").innerHTML;
		$scope.kinang02 = document.getElementById("id11").innerHTML;
		$scope.kinang03 = document.getElementById("id12").innerHTML;
		$scope.kinang04 = document.getElementById("id13").innerHTML;
	};
	$scope.tinh5 = function(){
		if($scope.kinang01 != null){
			document.getElementById("id10").innerHTML = $scope.kinang01;
		}

		if($scope.kinang02 != null){
			document.getElementById("id11").innerHTML = $scope.kinang02; 
		}

		if($scope.kinang03 != null){
			document.getElementById("id12").innerHTML = $scope.kinang03;
		}

		if($scope.kinang04 != null){
			document.getElementById("id13").innerHTML = $scope.kinang04; 
		}
	};
	$scope.edit6 = function(){
		$scope.hocvan2 = document.getElementById("id14").innerHTML;
		$scope.education2 = document.getElementById("id15").innerHTML;
	};
	$scope.tinh6 = function(){
		if($scope.hocvan2 != null){
			document.getElementById("id14").innerHTML = $scope.hocvan2; 
		}
		if($scope.education2 != null){
			document.getElementById("id15").innerHTML = $scope.education2; 
		}
	};
});





