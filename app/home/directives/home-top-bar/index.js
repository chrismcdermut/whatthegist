require('./home-top-bar.scss');

import homeTopBarHTML from './home-top-bar.html';
import homeTopBarController from './home-top-bar-controller';

function homeTopBarDirective() {
    return {
        scope: {},
        restrict: 'E',
        replace: true,
        template: homeTopBarHTML,
        controller: homeTopBarController
    };
}

export default homeTopBarDirective;
