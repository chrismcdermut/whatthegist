import characterSelectionMap from './character-selection-map';

function characterSelectionController($scope, $rootScope) {
    var capacity = 5;

    $scope.leftIndex = 0;
    $scope.characters = characterSelectionMap;

    $scope.swipeLeft = swipeLeft;
    $scope.swipeRight = swipeRight;
    $scope.clickCharacter = clickCharacter;

    function swipeLeft() {
        if ($scope.leftIndex + capacity < $scope.characters.length) {
            $scope.leftIndex++;
        }
    }

    function swipeRight() {
        if ($scope.leftIndex > 0) {
            $scope.leftIndex--;
        }
    }

    function clickCharacter(character) {
        if (character.enabled) {
            $rootScope.$broadcast('character-clicked', character);
        }
    }
}

export default characterSelectionController;
