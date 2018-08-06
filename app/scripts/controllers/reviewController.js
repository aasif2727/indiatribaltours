angular.module('indiaTours').controller("reviewController", function ($scope,$location, indiaTourService,sharedFactory) {
    $scope.categoryParam = $location.search()['category'];
    $scope.stateParam = $location.search()['state'];
    $scope.packageCode = $location.search()['code'];
    $scope.tourlistItems = [];
    $scope.itineraries = [];
    $scope.itineraryCount = {};
    $scope.chunkData;
    $scope._ = _;
    $scope.util = sharedFactory;
    $scope.itineraryDetail = {};
    bindItineraryDetails($scope.stateParam,$scope.packageCode);
    /*********Bind Itinerary Details**************/
    function bindItineraryDetails(_state,_code){
        if((_state != undefined && _state != null) && (_code != undefined && _code != null)){
            $scope.itineraryDetail = indiaTourService.getTourObjectByState(_state,_code);
            console.log($scope.itineraryDetail);
        }
    };
});