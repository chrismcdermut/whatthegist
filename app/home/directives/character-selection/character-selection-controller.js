import characterSelectionMap from './character-selection-map';

function characterSelectionController($scope, $rootScope) {
    var capacity = 5;

    $scope.leftIndex = 0;
    $scope.characters = characterSelectionMap;

    $scope.swipeLeft = swipeLeft;
    $scope.swipeRight = swipeRight;
    $scope.clickCharacter = clickCharacter;

    function swipeLeft() {
      console.log('loggingswipe left');
        if ($scope.leftIndex + capacity < $scope.characters.length) {
            $scope.leftIndex++;
        }
    }

    function swipeRight() {
      console.log('loggingswipe right');
        if ($scope.leftIndex > 0) {
            $scope.leftIndex--;
        }
    }

    function clickCharacter(character) {
        console.log('the fucking character is clicked');
        console.log(character);
        $rootScope.$broadcast('character-clicked', {character});
    }

}

export default characterSelectionController;
