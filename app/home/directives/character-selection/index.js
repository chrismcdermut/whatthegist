require('./character-selection.scss');

import characterSelectionController from './character-selection-controller';

function characterSelectionDirective() {
    return {
        scope: {},
        restrict: 'E',
        replace: true,
        template: require('./character-selection.html'),
        controller: characterSelectionController
    };
}

export default characterSelectionDirective;
