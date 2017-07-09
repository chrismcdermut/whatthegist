require('./character-selection.scss');

import characterSelectionHTML from './character-selection.html';
import characterSelectionController from './character-selection-controller';

function characterSelectionDirective() {
    return {
        scope: {},
        restrict: 'E',
        replace: true,
        template: characterSelectionHTML,
        controller: characterSelectionController
    };
}

export default characterSelectionDirective;
