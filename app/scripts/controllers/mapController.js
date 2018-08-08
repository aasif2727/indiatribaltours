'use strict';

angular.module('indiaTours').controller("mapController", function ($scope,$location, indiaTourService,sharedFactory) {
    $scope.categoryParam = $location.search()['category'];
    $scope.stateParam = $location.search()['state'];
    $scope.packageTitle = $location.search()['title'];
    $scope.tourlistItems = [];
    $scope.itineraries = [];
    $scope.itineraryCount = {};
    $scope.chunkData;
    $scope._ = _;
    $scope.util = sharedFactory;
    $scope.events = [];
    /*Get routePath details*/
    var url = $location.path().split('/');
    $scope.firstParameter = url[2];
    getItineraryCount($scope.stateParam);
    loadMap($scope.stateParam);

    /*********Load Itinerary Count**************/
    function getItineraryCount(_state){
        if((_state != undefined && _state != null)){
            var loadedResult = [];
            var resultArray = indiaTourService.getTourByState(_state);
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item);
                    //console.log(loadedResult);
                    $scope.itineraryCount.all = loadedResult.length;
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
                });
            });
        }
    };

    /*************Map Specific*****************/
    function loadMap(_state){   
        var loadedResult = [];
        /**************Get Itinerary by State to get Lat/Long**********************/
        if(_state != undefined && _state != null){
            var resultArray = indiaTourService.getTourByState(_state);
            resultArray.$loaded().then(function(data){
                data.forEach(item =>{
                    loadedResult.push(item.map);
                    bindMap(item.map);
                });
            });
        }
    };

    function bindMap(info){  
        console.log(info);
        var mapOptions = {
            zoom: 6,
            center: new google.maps.LatLng(20.593684, 78.962880),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        $scope.markers = []; 
        var infoWindow = new google.maps.InfoWindow(); 
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';  
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });    
        $scope.markers.push(marker);       
    };
});