require('./home-top-bar.scss');

import homeTopBarController from './home-top-bar-controller';

function homeTopBarDirective() {
    return {
        scope: {},
        restrict: 'E',
        replace: true,
        template: require('./home-top-bar.html'),
        controller: homeTopBarController
    };
}

export default homeTopBarDirective;
