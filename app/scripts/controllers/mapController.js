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

    /*************Map Specific*****************/
    $scope.options = {
        scrollwheel: true
    };
      
    $scope.vm = {};
      
    $scope.vm.map = {
        center: {                           
            latitude: 43.67023,
            longitude: -79.38676
        },
        zoom: 1
    };
      
    $scope.vm.markers = [
        {
          id : 99,
          latitude: 43.67023,
          longitude: -79.38676
        
      },
      {
          id : 91,
          latitude: 43.67023,
          longitude: -80.38676
        
      }];
});