'use strict';

angular.module('myApp.menu', [])
    .controller('MenuCtrl', ['$scope', '$anchorScroll', '$location', '$menu', function ($scope, $anchorScroll, $location, $menu) {

        $scope.showMenu = $menu.getShowMenu();

        $menu.setCallback(function (value) {
            $scope.showMenu = value;
        });

        $scope.scrollTo = function (id) {
            $location.hash(id);
            $anchorScroll();
        }
    }]);