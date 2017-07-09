function characterDisplayController($scope) {
    var characterOne = '';
    var characterTwo = '';
    $scope.showCharacterOne = false;
    $scope.showCharacterTwo = false;

    $scope.$on('character-clicked', function(event, character) {
        var name = character.name;

        if (!characterOne && characterTwo !== name) {
            characterOne = name;
            $scope.characterOneImagePath = character.figureOne;
            $scope.showCharacterOne = true;
        } else if (!characterTwo && characterOne !== name) {
            characterTwo = name;
            $scope.characterTwoImagePath = character.figureOne;
            $scope.showCharacterTwo = true;
        } else if (name === characterOne) {
            characterOne = '';
            $scope.showCharacterOne = false;
        } else if (name === characterTwo) {
            characterTwo = '';
            $scope.showCharacterTwo = false;
        }
    });
}

export default characterDisplayController;
