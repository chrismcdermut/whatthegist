'use strict';

require('./splash.scss')

function splashDirective($timeout) {

    return {
        transclude: true,
        restrict: 'E',
        scope: {},
        template: require('./splash.html'),
        link: function (scope) {
            scope.hideEl = false;
            $timeout(function() {
                scope.hideEl = true;
            }, 4000);
        }
    };
}

module.exports = splashDirective;
