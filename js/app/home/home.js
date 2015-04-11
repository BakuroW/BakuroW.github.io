'use strict';

angular.module('myApp.home', ['firebase'])
    .controller('HomeCtrl', ['$scope','$location','$firebaseAuth','CommonProp','$menu', function ($scope,$location, $firebaseAuth, CommonProp, $menu) {
        $menu.setShowMenu(true);
        var firebaseObj = new Firebase("https://db-myproject.firebaseio.com");
        var loginObj = $firebaseAuth(firebaseObj);
        $scope.user = {};
        $scope.SignIn = function (e) {
            e.preventDefault();
            var username = $scope.user.email;
            var password = $scope.user.password;
            loginObj.$authWithPassword({
                email: username,
                password: password
            })
                .then(function (user) {
// On success callback
                    console.log('Authentication successful');
                    $location.path('/welcome');
                    CommonProp.setUser(user.password.email);
                }, function (error) {
// On failure callback
                    console.log('Authentication failure');
                });
        }

    }])
    .service('CommonProp', function() {
        var user = '';

        return {
            getUser: function() {
                return user;
            },
            setUser: function(value) {
                user = value;
            }
        };
    });