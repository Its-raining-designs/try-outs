(function () {
    angular.module('dumpsterz.work_details.services',[])
           .factory('work_detailsService', work_detailsService);

    work_detailsService.$inject = ["$timeout"];

    function work_detailsService($timeout) {
        var work_detailsService = {
        };

        return work_detailsService;
    }
})();