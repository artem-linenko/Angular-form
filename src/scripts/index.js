// Teacher's javascript
import styles from '../assets/styles/style.scss';
import angular from 'angular';
import angularRoute from 'angular-route';

const app = angular.module('app', ['ngRoute']);

// Controllers
require('./controllers/RegistrationController')(app);

// Directives
require('./directives/navigation')(app);
require('./directives/passwordConfirm')(app);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.
		when('/authentication', {
			templateUrl: "./partials/authentication.html",
			controller: 'RegistrationController'
		})
		.when('/personal', {
			templateUrl: "./partials/personal.html",
			controller: 'RegistrationController'
		})
		.when('/sending', {
			templateUrl: "./partials/sending.html",
			controller: 'RegistrationController'
		})
		.otherwise({
			redirectTo: '/authentication'
		})

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
})