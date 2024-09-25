(function () {
    "use strict";

    function UserAgreementTourController($scope, userService, $http) {

        var vm = this;

        vm.optIn = function () {
            // Get the current user in backoffice
            userService.getCurrentUser().then(function (user) {
                // Send this user along to opt in
                // It's a fire & forget - not sure we need to check the response
                console.log(user);
                $http.get("https://google.com")
                    .then(function (response) {
                        console.log(response);
                    });
            });

            // Mark Tour as complete
            // This is also can help us indicate that the user accepted
            // Where disabled is set if user closes modal or chooses NO
            $scope.model.completeTour();
        }

        vm.triggerAlert = () => {
            alert("You clicked the button");
        }
    }

    angular.module("umbraco").controller("UserAgreementTourController", UserAgreementTourController);
})();