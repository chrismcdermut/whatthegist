'use strict';

/* @ngInject */
function splashDirective($timeout) {

    return {
        transclude: true,
        restrict: 'E',
        scope: {},
        template: require('./splash.html'),
        link: function (scope) {
            scope.showEl = true;
            $timeout(function() {
                scope.showEl = false;
            }, 2000);
        }
    };
}

module.exports = splashDirective;
