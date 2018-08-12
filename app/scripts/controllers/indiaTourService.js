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

        this.getDestinationObjectByCode = function(category,code){
            var dbRef = firebase.database().ref("destinations/"+ category + "/" + code);
            return $firebaseObject(dbRef);
        };

        this.updateItineraryHits = function(stateName,code){
            var dbRef = firebase.database().ref("states/"+ stateName +"/itineraries/"+ code);
            dbRef.once('value', function(snapshot) {
                if (snapshot.hasChild("hits")) {
                    dbRef.update({"hits": snapshot.val().hits + 1});
                }
                else{
                    dbRef.update({"hits": 1});
                }
            });
        };

        this.submitUserReq = function(reqObject){
            //get new key
            var newPostKey = firebase.database().ref().child('query').push().key;
            return firebase.database().ref("query").child(newPostKey).set(reqObject);           
        };

    }]);
}());
