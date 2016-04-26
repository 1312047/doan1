var myApp = angular.module("myapp",[]);

myApp.controller("maytinh",function ($scope) {
	$scope.ketqua = 'ket qua la :';
	var tam;
	// body...
	$scope.tinh = function(){
		var so1 = $scope.so1;
		var so2 = $scope.so2;
		if(so2 == null && so1 != null){
			$scope.thongbao = 'bạn chưa nhập số thứ 2 !';
		}
		if(so1 == null && so2 != null){
			$scope.thongbao = 'bạn chưa nhập số thứ nhất !';
		}
		if(so1 == null && so2 == null){
			$scope.thongbao = 'bạn chưa nhập cả hai số !'
		}
		var pheptinh = $scope.pheptinh;
		if(pheptinh == 'cong'){
			tam = so1 + so2;
		}
		else{
			if(pheptinh == 'tru'){
				tam = so1 - so2;
			}
			else{
				if(pheptinh == 'nhan'){
					tam = so1 * so2;
				}
				else{
					if(pheptinh == 'chia'){
						tam = so1 / so2;
					}
					else{
						$scope.thongbao = 'Bạn Chưa Chọn Phép Tính !';

					}
				}
			}
		}

		$scope.kq = tam;
	};
});