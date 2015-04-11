'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'myApp.menu',
        'myApp.services.menu',
        'myApp.home',
        'myApp.register',
        'myApp.welcome',
        'myApp.addPost',
        'myApp.directives.scrollEvent'
    ]).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        /*//HTML5 URL
        if(window.history && window.history.pushState){
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }*/

        $routeProvider.
            when('/addPost', {templateUrl: 'addPost/addPost.html',  controller: 'AddPostCtrl'}).
            when('/welcome', {templateUrl: 'welcome/welcome.html',  controller: 'WelcomeCtrl'}).
            when('/home',    {templateUrl: 'home/home.html',        controller: 'HomeCtrl'}).
            when('/register',{templateUrl: 'register/register.html',controller: 'RegisterCtrl'}).
            otherwise(       {redirectTo:  '/home'});//вид по умолчанию
        /*$locationProvider.html5Mode(true);*/
    }]);


/*
angular.module('phonecat', []).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider.
            when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
            when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
            otherwise({redirectTo: '/phones'});

        $locationProvider.html5Mode(true);

    }]);*/
/*Test html 5 mod*/