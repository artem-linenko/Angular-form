export default function(app) {
	return app.directive('passwordConfirm', function () {
	    return {
	        require: 'ngModel',
	        link: function (scope, elm, attrs, ngModel) {
	            ngModel.$parsers.unshift(function (viewValue, $scope) {
	                var compared = viewValue == scope.form.password.$viewValue;
	                console.log(compared);
	                ngModel.$setValidity('compared', compared)
	            })
	        }
	    }
	})
}