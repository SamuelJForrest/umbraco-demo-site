(function () {
    "use strict";

    function UserAgreementTourController($scope, userService, $http) {

        var vm = this;
        vm.hasReadTerms = false;

        vm.optIn = function () {
            userService.getCurrentUser().then(function (user) {

                var userAgreement = {
                    userId: user.id,
                    email: user.email,
                    tourName: "User Agreement Tour",
                    lastUpdated: new Date()
                };

                $http.post("/umbraco/api/UserAgreementTourApi/PostUserAgreement", userAgreement)
                    .catch(function (error) {
                        console.log('Something went wrong');
                        console.error(error);
                    });
            });

            $scope.model.completeTour();
        }
    }

    angular.module("umbraco").controller("UserAgreementTourController", UserAgreementTourController);
})();