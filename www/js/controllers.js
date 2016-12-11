angular.module('app.controllers', [])
  
.controller('konversiKeRupiahCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('tambahDataCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('lihatDataCtrl', function($scope,$http,$ionicLoading,$stateParams,$ionicPopup,$state){
	$scope.showPopup = function($judul,$subjudul,$user){
		var mypopup = $ionicPopup.show({
			title 	    : $judul,
			subTitle 	: $subjudul,
			buttons 	: [
				{//first button
					text	: 'Yes',
					onTap	: function(e){
						$http.get('http://localhost/konversiMU/delete.php?id='+$user).then(function(result){
							if(result.data=="1"){
								$state.go('view');
							}
						})
					}
				},
				{//second button
					text	: 'Batal',
					onTap	: function(e){

					}
				}

			]
		})
	}

	$scope.Hapus = function(User){
		$scope.showPopup("Confirmaation","Yakin mau ngehapus " + NamaUang + " ? " , NamaUang)
	}

	$ionicLoading.show();
	$http.get('http://localhost/konversiMU/getDataListUang.php')
	.then(function(result){
		$scope.dataListUang1 = result.data;
		$ionicLoading.hide();
	})

	$scope.doRefresh = function(){
	$ionicLoading.show();
	$http.get('http://localhost/konversiMU/getDataListUang.php')
	.then(function(result){
		$scope.dataListUang1 = result.data;
		$ionicLoading.hide();
	})
	}
})
      
.controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('listUangCtrl',function ($scope, $http, $ionicLoading) {
	$ionicLoading.show();
	$http.get('http://localhost/konversiMU/getDataListUang.php')
	.then(function(result){
		$scope.dataListUang = result.data;
		$ionicLoading.hide();
	})
})
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
.controller('prosesKonversiCtrl',['$scope','$http', function ($scope,$http,$ionicLoading,$stateParams){
	$http.get("getDataByUang.php")
	.success(function(dataU){
		$scope.dataU = dataU;
	})
	.error(function(){
		$scope.data = "error in fetching data";
	})

	var id = $stateParams.detail_id;

	$scope.data = {
		id: '',
		NamaUang: '',
		nilai: ''
	}

	$ionicLoading.show();
	$http.get('http://localhost/konversiMU/getDataByUang.php?id=' + id)
	.then(function(result){
		$scope.data.id 			= result.data[0].id;
		$scope.data.NamaUang 	= result.data[0].NamaUang;
		$scope.data.nilai			= result.data[0].nilai;

		$ionicLoading.hide();
	})


}]);
 