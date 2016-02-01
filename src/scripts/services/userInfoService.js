export default function(app) {

	return app.factory('userInfoService', function() {
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
			}
		}

		return user;
	})
} 