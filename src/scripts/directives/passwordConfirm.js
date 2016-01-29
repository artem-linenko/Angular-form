export default function(app) {
	return app.directive('passwordConfirm', function () {
	    return {
	        require: 'ngModel',
	        link: function (scope, elm, attrs, ctrl) {
	            ctrl.$parsers.push(function (viewValue, $scope) {
	                var compared = viewValue == scope.form.password.$viewValue;
	                ngModel.$setValidity('compared', compared)
	            })
	        }
	    }
	})
}