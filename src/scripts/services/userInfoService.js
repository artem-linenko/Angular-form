export default function(app) {

	return app.factory('userInfoService', function($http) {
		var user = {
			userInstance: {
				auth: {
				},
				personal: {
				}
			},
			userPermissions: {
				auth: false,
				personal: false
			},
			allowPersonalView: function() {
				if (this.userPermissions.auth) {
					return true;
				}
			},
			allowSendingView: function() {
				if (this.userPermissions.auth && this.userPermissions.personal) {
					return true;
				}
			},
			allowTabView: function(tabName) {
				if (!tabName) {
					return false;
				} else if (tabName === "personal") {
					return this.allowPersonalView()
				} else if (tabName === "sending") {
					return this.allowSendingView();
				} else {
					return true;
				}
			},
			registerUser: function() {
				var userInfo = {
					username: this.userInstance.auth.username,
					password: this.userInstance.auth.password,
					email: this.userInstance.auth.email,
					name: this.userInstance.personal.name,
					birthDate: this.userInstance.personal.birthDate,
					additionalInfo: this.userInstance.personal.additionalInfo
				},
				req = {
					method: 'POST',
					url: '/register',
					headers: { 'Content-Type': 'application/json'},
					data: { userInfo: userInfo }
				}

				$http(req).then(function successCallback(response) {
        			window.location.href = "/users";
					}, function errorCallback(response) {
					alert("Cannot register");
					});
			}
		}

		return user;
	})
} 