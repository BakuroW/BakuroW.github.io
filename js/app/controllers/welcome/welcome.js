'use strict';

angular.module('myApp.welcome', [])
    .controller('WelcomeCtrl', ['$menu','$scope','CommonProp', '$firebase', function($menu, $scope, CommonProp, $firebase) {
        $menu.setShowMenu(false);
        $scope.username = CommonProp.getUser();

        var firebaseObj = new Firebase("https://db-myproject.firebaseio.com/Articles");
        var sync = $firebase(firebaseObj);
        var lst = sync.$asArray();
        $scope.articles = lst;
    }]);