export default function(app) {
	var userInfoService = require('../services/userInfoService')(app);
	return app.controller('RegistrationController', function($scope, $location, userInfoService) {

		$scope.$on('$routeChangeSuccess', function(scope, next, current){
        	$scope.user = userInfoService;
		});

		$scope.user = {
			auth: {
				login: 'qq',
				email: 'a@gmail.com',
				password: 'qqq',
				confirm: 'qqq',
				passed: false
			},
			personal: {
				name: 'A',
				date: '',
				addInfo: 'dssdfv',
				passed: false
			}
		}

		$scope.getFullDate = function() {
			var date = $scope.user.personal.date,
				y = date.getFullYear().toString(),
				m = (date.getMonth()+1).toString(),
   				d  = date.getDate().toString(),
   				fullDate = m + '/' + d + '/' + y;
   			
   			return fullDate;
		}

		$scope.moveToPersonal = function() {
			$scope.user.auth.passed = true;
			$location.path('/personal');
			userInfoService.auth = $scope.user.auth;
			$scope.user = userInfoService;
			console.log($scope.user);
		}


		$scope.moveToSending = function(a) {
			$scope.user.personal.passed = true;
			$location.path('/sending');
			userInfoService.personal = $scope.user.personal;
			$scope.user = userInfoService;

			console.log($scope.user);
		}

		$scope.showUser = function(a) {
			$scope.user = userInfoService;
			console.log($scope.user)
			console.log(a)
		}
	})
} 