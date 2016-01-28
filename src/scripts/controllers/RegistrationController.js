export default function(app) {

	return app.controller('RegistrationController', function($scope) {
		$scope.user = {
			login: '',
			email: '',
			password: '',
			confirm: ''
		}

		$scope.showValue = function(value1, value2) {
			console.log(value1, value2)
		}
	})
} 