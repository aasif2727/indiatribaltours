'use strict';
(function () {
    angular.module('indiaTours').service("indiaTourService", ['$http','$firebaseObject','$firebaseArray', function ($http,$firebaseObject,$firebaseArray) {
        var baseUrl = 'https://indiatribaltours-db786.firebaseio.com';

 
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

        this.getTourByCategory = function(){
            var dbRef = firebase.database().ref("tours");
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

        this.getStateObjectByCode = function(region,state){
            var dbRef = firebase.database().ref("states/"+ state);
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

        this.updateItineraryLikes = function(userSession){
            var newSessionKey = firebase.database().ref("userLikes").child('aasif2707').push().key;//get new key
            return firebase.database().ref("userLikes").child('aasif2707').child(newSessionKey).set(userSession);
        };

        this.submitUserReq = function(reqObject){         
            var newPostKey = firebase.database().ref().child('query').push().key;//get new key
            return firebase.database().ref("query").child(newPostKey).set(reqObject);           
        };

        this.submitUserEnquiry = function(reqObject){        
            var newPostKey = firebase.database().ref().child('booking').push().key;//get new key
            return firebase.database().ref("booking").child(newPostKey).set(reqObject);           
        };

    }]);
}());
