export default function(app) {

	return app.factory('userInfoService', function() {
		var user = {
			auth: {
			},
			personal: {
			}
		}

		return user;
	})
} 