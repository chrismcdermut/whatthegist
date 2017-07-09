function queryBarController($scope) {
    var characterOne = '';
    var characterTwo = '';
    $scope.characterSelected = false;
    $scope.queryPlaceholder = '';

    $scope.$on('character-clicked', function(event, character) {
        var name = character.name;

        $scope.characterSelected = true;
        $scope.suggestedQuestions = character.suggestedQuestions &&
        ((characterOne && !characterTwo) || (!characterOne && characterTwo)) ? character.suggestedQuestions : false;

        if (!characterOne && characterTwo !== name) {
            characterOne = name;
        } else if (!characterTwo && characterOne !== name) {
            characterTwo = name;
        } else if (name === characterOne) {
            characterOne = '';
        } else if (name === characterTwo) {
            characterTwo = '';
        }

        if (characterOne && !characterTwo) {
            $scope.queryPlaceholder = 'Ask a question about ' + characterOne;
        } else if (!characterOne && characterTwo) {
            $scope.queryPlaceholder = 'Ask a question about ' + characterTwo;
        } else if (characterOne && characterTwo) {
            $scope.queryPlaceholder = 'Ask about ' + characterOne + ' and ' + characterTwo;
        } else {
            $scope.queryPlaceholder = '';
            $scope.characterSelected = false;
        }
    });
}

export default queryBarController;
