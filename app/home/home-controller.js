function homeController($scope) {
    var currentCharacterOne = '';
    var currentCharacterTwo = '';
    var characterOneIsSet = false;
    var characterTwoIsSet = false;

    $scope.showCharacterOne = false;
    $scope.$on('character-clicked', function(event, character) {
        if (currentCharacterOne == '') {
            currentCharacterOne = character.character.name;
            $scope.showCharacterOne = true;
            $scope.characterOneImagePath = character.character.figureOne;
        } else {
            currentCharacterOne = '';
            $scope.showCharacterOne = false;
        }

    });

}

export default homeController;
