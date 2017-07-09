'use strict';

require('./splash.scss');

function splashDirective($timeout) {

    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: require('./splash.html'),
        link: function (scope) {
            $timeout(function() {
                scope.hideEl = true;
            }, 3900);
        }
    };
}

module.exports = splashDirective;
