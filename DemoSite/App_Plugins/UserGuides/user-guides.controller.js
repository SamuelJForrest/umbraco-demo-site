angular.module("umbraco")
	.controller("UserGuidesDashboardController", function ($scope, $window) {
		vm = this;

		const domainName = $window.location.hostname;
		$window.document.title = `User Guides - ${domainName}`;
	});