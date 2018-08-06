'use strict';

/**
 * @ngdoc overview
 * @name tribalToursApp
 * @description
 * # tribalToursApp
 *
 * Main module of the application.
 */
angular
.module('indiaTours', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch','firebase','ui.bootstrap'])
.config(function ($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'views/masterview.html',
      controller: 'homeController'
    })
    .when('/aboutus', {
      templateUrl: 'views/aboutusview.html',
      controller: 'homeController'
    })
    .when('/contactus', {
      templateUrl: 'views/contactus.html',
      controller: 'homeController'
    })    
    .when('/faq', {
      templateUrl: 'views/faq.html',
      controller: 'homeController'
    })    
    .when('/view/list', {
      templateUrl: 'views/listview.html',
      controller: 'tourController'
    })
    .when('/view/grid', {
      templateUrl: 'views/gridview.html',
      controller: 'tourController'
    })  
    .when('/view/map', {
      templateUrl: 'views/mapview.html',
      controller: 'mapController'
    }) 
    .when('/review/itinerary', {
      templateUrl: 'views/review.html',
      controller: 'reviewController'
    })        
    .otherwise({
      redirectTo: '/'
    });
});