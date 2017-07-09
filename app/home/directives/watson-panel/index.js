require('./watson-panel.scss');

import watsonPanelController from './watson-panel-controller';

function watsonPanelDirective() {
    return {
        scope: {},
        restrict: 'E',
        replace: true,
        template: require('./watson-panel.html'),
        controller: watsonPanelController
    };
}

export default watsonPanelDirective;
