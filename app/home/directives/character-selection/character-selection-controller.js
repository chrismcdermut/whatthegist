function characterSelectionController($scope) {
    var capacity = 4;

    $scope.leftIndex = 0;
    $scope.characters = [{
        'name': 'Superman',
        'src': 'btn-superman'
    }, {
        'name': 'Batman',
        'src': 'btn-batman'
    }, {
        'name': 'Wonder Woman',
        'src': 'btn-wonderwoman'
    }, {
        'name': 'Aquaman',
        'src': 'btn-aquaman'
    }, {
        'name': 'Green Lantern',
        'src': 'btn-greenlantern'
    }, {
        'name': 'Superman',
        'src': 'btn-superman'
    }, {
        'name': 'Batman',
        'src': 'btn-aquaman'
    }, {
        'name': 'Wonder Woman',
        'src': 'btn-wonderwoman'
    }, {
        'name': 'Green Lantern',
        'src': 'btn-greenlantern'
    }];

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
