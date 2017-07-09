require('./query-bar.scss');

import queryBarHTML from './query-bar.html';
import queryBarController from './query-bar-controller';

function queryBarDirective() {
    return {
        scope: {},
        restrict: 'E',
        replace: true,
        template: queryBarHTML,
        controller: queryBarController
    };
}

export default queryBarDirective;