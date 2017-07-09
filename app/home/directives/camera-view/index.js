require('./camera-view.scss');

import cameraViewHTML from './camera-view.html';
import cameraViewController from './camera-view-controller';

function cameraViewDirective() {
    return {
        scope: {},
        restrict: 'E',
        replace: true,
        template: cameraViewHTML,
        controller: cameraViewController
    };
}

export default cameraViewDirective;
