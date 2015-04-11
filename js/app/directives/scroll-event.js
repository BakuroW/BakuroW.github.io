angular.module("myApp.directives.scrollEvent", [])
    .directive("scrollEvent", ["$window", function ($window) {

        return {
            scope: {
                scrollEvent: "=scrollEvent"
            },
            restrict: 'A',
            link: function (scope, element, attrs) {

                var windowEl = angular.element($window);

                var handler = function () {
                    if (windowEl[0].pageYOffset > scope.scrollEvent.height) {
                        element.addClass(scope.scrollEvent.class);
                    } else {
                        element.removeClass(scope.scrollEvent.class);
                    }
                };

                windowEl.on('scroll', handler);


                handler();
            }
        }

    }]);