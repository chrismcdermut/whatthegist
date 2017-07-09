import characterDisplayController from './character-display-controller';

function characterDisplayDirective() {
    return {
        scope: false,
        restrict: 'E',
        replace: true,
        template: require('./character-display.html'),
        controller: characterDisplayController
    };
}

export default characterDisplayDirective;
