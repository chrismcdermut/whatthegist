// require('./character-selection.scss');

import characterDisplayTwoController from './character-display-two-controller';

function characterDisplayTwoDirective() {
    return {
        scope: false,
        restrict: 'E',
        replace: true,
        template: require('./character-display-two.html'),
        controller: characterDisplayTwoController
    };
}

export default characterDisplayTwoDirective;
