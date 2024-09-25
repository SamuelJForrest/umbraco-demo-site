app.run(['eventsService', 'tourService',
    function (eventsService, tourService) {
        eventsService.on("appState.tour.updatedTours", function (evt, data) {
            let userAgreementTour = data.find(tour => tour.alias == "userAgreementTour");

            if (userAgreementTour && userAgreementTour.completed === false) {
                tourService.startTour(userAgreementTour);
            }
        });
    }]);