'use strict';

angular.module('myApp.register', ['firebase'])
    .controller('RegisterCtrl', ['$scope','$location', '$firebaseAuth','$menu', function ($scope,$location,$firebaseAuth, $menu) {
            $menu.setShowMenu(true);
            var firebaseObj = new Firebase("https://db-myproject.firebaseio.com");
            var auth = $firebaseAuth(firebaseObj);
            $scope.signUp = function () {
                if (!$scope.regForm.$invalid) {

                    var email = $scope.user.email;
                    var password = $scope.user.password;

                    if (email && password) {
                        auth.$createUser(email, password)
                            .then(function () {
                                // do things if success
                                console.log('User creation success');
                                $location.path('/home');//редирект после удачной регистрации на главную
                            }, function (error) {
                                // do things if failure
                                console.log(error);
                                //колбэк на случая того что такой емейл уже существует
                                $scope.regError = true;
                                $scope.regErrorMessage = error.message;
                            });
                    }
                }


        };
    }]);