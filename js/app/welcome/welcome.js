'use strict';

angular.module('myApp.welcome', [])
    .controller('WelcomeCtrl', ['$scope','CommonProp','$menu', function($scope,CommonProp, $menu) {
        $menu.setShowMenu(false);
        $scope.username = CommonProp.getUser();
    }]);