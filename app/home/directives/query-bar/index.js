require('./query-bar.scss');

import queryBarController from './query-bar-controller';

function queryBarDirective() {
    return {
        scope: {},
        restrict: 'E',
        replace: true,
        template: require('./query-bar.html'),
        controller: queryBarController
    };
}

export default queryBarDirective;
