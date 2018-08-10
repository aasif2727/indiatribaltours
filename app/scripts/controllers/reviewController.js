angular.module('indiaTours').controller("reviewController", function ($scope,$location, indiaTourService,sharedFactory) {
    $scope.categoryParam = $location.search()['category'];
    $scope.stateParam = $location.search()['state'];
    $scope.packageCode = $location.search()['code'];
    $scope._ = _;
    $scope.util = sharedFactory;
    $scope.itineraryDetail = {};
    bindItineraryDetails($scope.stateParam,$scope.packageCode);
    /*********Bind Itinerary Details**************/
    function bindItineraryDetails(_state,_code){
        if((_state != undefined && _state != null) && (_code != undefined && _code != null)){
            $scope.itineraryDetail = indiaTourService.getTourObjectByState(_state,_code);
            //update page-hits
            indiaTourService.updateItineraryHits(_state,_code);
        }
    };

    $scope.bindIcon = function(){
        if($scope.categoryParam != undefined && $scope.categoryParam == 'adventure'){
            return 'icon_set_1_icon-3';
        }
        if($scope.categoryParam != undefined && $scope.categoryParam == 'craft'){
            return 'icon_set_1_icon-44';
        }   
        if($scope.categoryParam != undefined && $scope.categoryParam == 'beach'){
            return 'icon_set_1_icon-8';
        }     
        if($scope.categoryParam != undefined && $scope.categoryParam == 'camping'){
            return 'icon_set_1_icon-37';
        }        
        if($scope.categoryParam != undefined && $scope.categoryParam == 'city'){
            return 'icon_set_1_icon-40';
        }    
        if($scope.categoryParam != undefined && $scope.categoryParam == 'cultural'){
            return 'icon_set_1_icon-1';
        }  
        if($scope.categoryParam != undefined && $scope.categoryParam == 'heritage'){
            return 'icon_set_1_icon-4';
        }  
        if($scope.categoryParam != undefined && $scope.categoryParam == 'temple'){
            return 'icon_set_1_icon-1';
        }    
        if($scope.categoryParam != undefined && $scope.categoryParam == 'tribal'){
            return 'icon_set_1_icon-30';
        }  
        if($scope.categoryParam != undefined && $scope.categoryParam == 'wildlife'){
            return 'icon_set_1_icon-30';
        }  
        else{
            return 'icon_set_1_icon-30';
        }
    };
});