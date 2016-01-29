export default function(app) {

	return app.controller('RegistrationController', function($scope, $location) {
		$scope.user = {
			auth: {
				login: '',
				email: '',
				password: '',
				confirm: '',
				passed: false
			}
		}

		$scope.moveToPersonal = function() {
			$location.path('/personal');
			$scope.user.auth.passed = true;
		}


		$scope.showForm = function(form) {

			console.log(form)
		}
	})
} 