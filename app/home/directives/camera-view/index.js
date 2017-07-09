require('./camera-view.scss');

import cameraViewController from './camera-view-controller';

function cameraViewDirective() {
    return {
        scope: {},
        restrict: 'E',
        replace: true,
        template: require('./camera-view.html'),
        controller: cameraViewController
    };
}

export default cameraViewDirective;
