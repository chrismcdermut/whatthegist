import characterSelectionMap from './character-selection-map';

function characterSelectionController($scope) {
    var capacity = 5;

    $scope.leftIndex = 0;
    $scope.characters = characterSelectionMap;

    $scope.swipeLeft = swipeLeft;
    $scope.swipeRight = swipeRight;

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
}

export default characterSelectionController;
