'use strict';
(function () {
    angular.module('indiaTours').service("indiaTourService", ['$http','$firebaseObject','$firebaseArray', function ($http,$firebaseObject,$firebaseArray) {
        var baseUrl = 'https://indiatribaltours-db786.firebaseio.com';

        this.getSliderImages = function () {
            return $http.get(baseUrl + '/slider.json');
        };

        this.allDestination = function(){
            var dbRef = firebase.database().ref("/states/destinations").orderByChild("hits");
            return $firebaseArray(dbRef);
        };
 
        this.getAllState = function(){
            var dbRef = firebase.database().ref("states");
            return $firebaseArray(dbRef);
        };

        this.getEventsByState = function(stateName){
            var dbRef = firebase.database().ref("states/"+ stateName +"/events");
            return $firebaseArray(dbRef);
        };

        this.getTourByState = function(stateName){
            var dbRef = firebase.database().ref("states/"+ stateName +"/itineraries");
            return $firebaseArray(dbRef);
        };

        this.getTourObjectByState = function(stateName,code){
            var dbRef = firebase.database().ref("states/"+ stateName +"/itineraries/"+ code);
            return $firebaseObject(dbRef);
        };

    }]);
}());
