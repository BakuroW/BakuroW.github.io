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

        //HTML5 URL
        if(window.history && window.history.pushState){
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }
        $routeProvider.
            when('/addPost', {templateUrl: '/js/app/controllers/addPost/addPost.html',  controller: 'AddPostCtrl'}).
            when('/welcome', {templateUrl: '/js/app/controllers/welcome/welcome.html',  controller: 'WelcomeCtrl'}).
            when('/home',    {templateUrl: '/js/app/controllers/home/home.html',        controller: 'HomeCtrl'}).
            when('/register',{templateUrl: '/js/app/controllers/register/register.html',controller: 'RegisterCtrl'}).
            otherwise(       {redirectTo:  '/home'});//вид по умолчанию
        /*$locationProvider.html5Mode(true);*/
    }]);
