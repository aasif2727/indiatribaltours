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
.module('indiaTours', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch','firebase','ui.bootstrap','ngMaterial', 'ngMessages'])
.config(function ($routeProvider,$locationProvider) {
  // $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(
    {
      enabled:true, 
      requireBase:false
    });
  $routeProvider
    .when('/', {
      templateUrl: 'views/masterview.html',
      controller: 'homeController'
    })
    .when('/aboutus', {
      templateUrl: 'views/aboutusview.html',
      controller: 'homeController'
    })
    .when('/gallery', {
      templateUrl: 'views/photogallery.html',
      controller: 'homeController'
    })
    .when('/contactus', {
      templateUrl: 'views/contactus.html',
      controller: 'enquiryController'
    })    
    .when('/faq', {
      templateUrl: 'views/faq.html',
      controller: 'homeController'
    })    
    .when('/view/list', {
      templateUrl: '/views/listview.html',
      controller: 'tourController'
    })
    .when('/view/grid', {
      templateUrl: '/views/gridview.html',
      controller: 'tourController'
    })  
    .when('/view/map', {
      templateUrl: '/views/mapview.html',
      controller: 'mapController'
    }) 
    .when('/review', {
      templateUrl: '/views/stateview.html',
      controller: 'reviewController'
    })   
    .when('/review/itinerary', {
      templateUrl: '/views/review.html',
      controller: 'reviewController'
    }) 
    .when('/review/destination', {
      templateUrl: '/views/detailview.html',
      controller: 'reviewController'
    })         
    .otherwise({
      redirectTo: '/'
    });
});
