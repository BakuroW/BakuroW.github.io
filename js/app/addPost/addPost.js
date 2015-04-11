'use strict';

angular.module('myApp.addPost', [])
    .controller('AddPostCtrl', ['$scope','$firebase','$menu', function($scope, $firebase, $menu) {
        $menu.setShowMenu(false);
        $scope.AddPost = function(){
            var title = $scope.article.title;
            var post = $scope.article.post;
            var firebaseObj = new Firebase("https://db-myproject.firebaseio.com/Messages");
            var fb = $firebase(firebaseObj);
            fb.$push({ title: title,post: post}).then(function(ref) {
                console.log(ref);
            }, function(error) {
                console.log("Error:", error);
            });
        }
    }]);