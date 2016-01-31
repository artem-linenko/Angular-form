export default function(app) {
	var userInfoService = require('../services/userInfoService')(app);
	return app.controller('RegistrationController', function($scope, $location, userInfoService) {

		$scope.$on('$routeChangeSuccess', function(scope, next, current){
        	$scope.user = userInfoService;
		});

		$scope.user = {
			auth: {
				login: '',
				email: '',
				password: '',
				confirm: '',
				passed: false
			},
			personal: {
				name: '',
				date: '',
				addInfo: '',
				passed: false
			}
		}

		$scope.getFullDate = function() {
			if ($scope.user.personal.date) {
				var date = $scope.user.personal.date,
					y = date.getFullYear().toString(),
					m = (date.getMonth()+1).toString(),
	   				d  = date.getDate().toString(),
	   				fullDate = m + '/' + d + '/' + y;
	   			
	   			return fullDate;
			}
		}

		$scope.moveToPersonal = function() {
			$scope.user.auth.passed = true;
			$location.path('/personal');
			userInfoService.auth = $scope.user.auth;
			$scope.user = userInfoService;
		}


		$scope.moveToSending = function(a) {
			$scope.user.personal.passed = true;
			$location.path('/sending');
			userInfoService.personal = $scope.user.personal;
			$scope.user = userInfoService;
		}

		// Navigation logic
		$scope.activeTab = $location.path().substr(1);

    	$scope.changePath = function(newPath) {
			$location.path(newPath);
    	}

		$scope.$watch(function() {
		    return $location.path();
		}, function(path){
			$scope.activeTab = path.substr(1);
		});

		$scope.onNavigationClick = function($event) {
    		if ($event.target.tagName != "LI") return;
    			
			var tabName = $event.target.getAttribute('name');
			$scope.activeTab = tabName;
			
			$scope.changePath('/' + tabName);
    	}
	})
} 