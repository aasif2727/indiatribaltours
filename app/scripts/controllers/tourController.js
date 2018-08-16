'use strict';

angular.module('indiaTours').controller("tourController", function ($scope,$location, indiaTourService,sharedFactory) {
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
    getEvents($scope.stateParam);
    /*********Load Itinerary on page Load**************/
    getTourByState($scope.stateParam,$scope.categoryParam);

    function getTourByState(_state,_category) {
        if((_state != undefined && _state != null) && _category == undefined){
            if($scope.firstParameter  == 'list'){
                $scope.itineraries = indiaTourService.getTourByState(_state);
            }
            else{
                var loadedResult = [];
                var resultArray = indiaTourService.getTourByState(_state);
                resultArray.$loaded().then(function(data){
                    data.forEach(item =>{
                        loadedResult.push(item);
                        $scope.chunkData = chunkBuilder(loadedResult,2);
                    });
                });
            }
        }
        if((_state != undefined && _state != null) && (_category != undefined && _category != null)){
            var loadedResult = [];

            if(_category == 'tribal'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Tribal Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Tribal Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'temple'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Temple Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Temple Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'city'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "City Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "City Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'beach'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Beach Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Beach Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'camping'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Camping Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Camping Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'heritage'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Heritage Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Heritage Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'wildlife'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Wildlife Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Wildlife Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'craft'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Art & Craft Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Art & Craft Tour"}),2);
                        });
                    });
                }
            }
            if(_category == 'cultural'){
                var resultArray = indiaTourService.getTourByState(_state);
                if($scope.firstParameter  == 'list'){
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.itineraries = _.where(loadedResult,{ category : "Cultural Tour"});
                        });
                    });
                }
                else{
                    resultArray.$loaded().then(function(data){
                        data.forEach(item =>{
                            loadedResult.push(item);
                            $scope.chunkData = chunkBuilder(_.where(loadedResult,{ category : "Cultural Tour"}),2);
                        });
                    });
                }
            }
        }
    };

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


    function getEvents(_state){
        if(_state != undefined && _state != null){
            if($scope.firstParameter  == 'list'){
                $scope.itineraries = indiaTourService.getEventsByState(_state);
            }
            else{
                var loadedResult = [];
                var resultArray = indiaTourService.getEventsByState(_state);
                resultArray.$loaded().then(function(data){
                    data.forEach(item =>{
                        loadedResult.push(item);
                        $scope.chunkData = chunkBuilder(loadedResult,2);
                    });
                });
            }
        }
    };

    /***Split array of data into chunks to bind to gridView******/
    function chunkBuilder(arr, size) {
        var newArr = [];
        for (var i=0; i<arr.length; i+=size) {
          newArr.push(arr.slice(i, i+size));
        }
        return newArr;
    };

    $scope.updateLike = function(itineraryCode){
        var _email = localStorage.getItem('email');
        var _signUpMode = localStorage.getItem('signUpMode');
        if(_email != undefined && (_signUpMode != undefined && _signUpMode == 'true') && $scope.stateParam != undefined){
            //update page-likes
            indiaTourService.updateItineraryLikes($scope.stateParam,itineraryCode);
        }
        else{
            alert('Please log-in!');
        }
    };
});