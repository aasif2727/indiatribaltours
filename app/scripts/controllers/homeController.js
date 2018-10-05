angular.module('indiaTours').controller("homeController", function ($scope,$rootScope, indiaTourService,sharedFactory) {

    /*********Invoke On Page Loading********************/
    $scope.util = sharedFactory;
    $scope.itineraryCount = {};
    $rootScope.itineraries = [];
    getAllTribalTours();
    getItineraryCount();
    /*********Load all Destinations********************/
    function getAllTribalTours(){
        var loadedResult = [];
        var resultArray = indiaTourService.getAllTours();
        resultArray.$loaded().then(function(data){
            data.forEach(item =>{
                loadedResult.push(item);
                $rootScope.itineraries = _.where(loadedResult,{ category : "Tribal Tour"});
            });
        });
    };
 
    
    /*********Load Itinerary Count**************/
    function getItineraryCount(){
        var loadedResult = [];
        var resultArray = indiaTourService.getAllTours();
        resultArray.$loaded().then(function(data){
            data.forEach(item =>{
                loadedResult.push(item);
                $scope.itineraryCount.beach = _.where(loadedResult,{ category : "Beach Tour"}).length;
                $scope.itineraryCount.tribal = _.where(loadedResult,{ category : "Tribal Tour"}).length;
                $scope.itineraryCount.temple = _.where(loadedResult,{ category : "Temple Tour"}).length;
                $scope.itineraryCount.heritage = _.where(loadedResult,{ category : "Heritage Tour"}).length;
                $scope.itineraryCount.wildlife = _.where(loadedResult,{ category : "Wildlife Tour"}).length;
                $scope.itineraryCount.craft = _.where(loadedResult,{ category : "Art & Craft Tour"}).length;
                $scope.itineraryCount.cultural = _.where(loadedResult,{ category : "Cultural Tour"}).length;
                $scope.itineraryCount.city = _.where(loadedResult,{ category : "City Tour"}).length;
                $scope.itineraryCount.camping = _.where(loadedResult,{ category : "Camping Tour"}).length;
                $scope.itineraryCount.adventure = _.where(loadedResult,{ category : "Adventure Tour"}).length;
                $scope.itineraryCount.nightlife = _.where(loadedResult,{ category : "Nightlife Tour"}).length;
                $scope.itineraryCount.trekking = _.where(loadedResult,{ category : "Trekking Tour"}).length;
                $scope.itineraryCount.festival = _.where(loadedResult,{ category : "Festival Tour"}).length;
            });
        });
    };
});