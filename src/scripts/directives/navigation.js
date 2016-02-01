export default function(app) {
	var userInfoService = require('../services/userInfoService')(app);

	return app.directive('navigation', function($location, $rootScope, userInfoService) {
		return {
		  	restrict: "E",
		    templateUrl: "./partials/navigation.html",
		    link: function($scope, element, attrs) {
				
				//Initially always redirect to '/authentication', other tabs are forbidden	    	
		    	$scope.activeTab = 'authentication';
		    	$location.path('/' + $scope.activeTab);

		    	$scope.changeTab = function(tabName) {
		    		if (userInfoService.allowTabView(tabName)) {
		    			$location.path('/' + tabName);
		    			$rootScope.$apply();

	    				$scope.activeTab = tabName;
		    		}
		    	}

		    	// Watcher for browser back-forward navigation
				$scope.$watch(function() {
				    return $location.path();
				}, function(path){
					$scope.activeTab = path.substr(1);
					$scope.userPermissions = userInfoService.userPermissions;
				});

		    	element.on('click', function($event) {
		    		if ($event.target.tagName == "LI") {
		    			var tabName = $event.target.getAttribute('name');
		    			
		    			$scope.changeTab(tabName);
		    		}
		    	});
		    }
 		 }
	})
} 