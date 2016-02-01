export default function(app) {
	var userInfoService = require('../services/userInfoService')(app);
	return app.controller('RegistrationController', function($scope, $location, userInfoService) {

		$scope.$on('$routeChangeSuccess', function(scope, next, current){
        	$scope.user = userInfoService.userInstance;
        	$scope.allowSendingRequest = userInfoService.userPermissions.auth && userInfoService.userPermissions.personal;
		});

		$scope.moveToPersonal = function() {
			userInfoService.userInstance = $scope.user;
			userInfoService.userPermissions.auth = true;
			$location.path('/personal');
		}


		$scope.moveToSending = function(a) {
			userInfoService.userInstance = $scope.user;
			userInfoService.userPermissions.personal = true;
			$location.path('/sending');
		}
	})
} 