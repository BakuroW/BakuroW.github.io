'use strict';

angular.module('myApp.addPost', [])
    .controller('AddPostCtrl', ['$scope','$firebase','$menu','CommonProp','$location', function($scope, $firebase, $menu, CommonProp, $location) {
        $menu.setShowMenu(false);
        $scope.AddPost = function(){
            var title = $scope.article.title;
            var post = $scope.article.post;
            var firebaseObj = new Firebase("https://db-myproject.firebaseio.com/Articles");
            var fb = $firebase(firebaseObj);
            fb.$push({
                title: title,
                post: post,
                emailId: CommonProp.getUser()
            }).then(function(ref) {
                console.log(ref);
                $location.path('/welcome');
            }, function(error) {
                console.log("Error:", error);
            });
        }
    }]);