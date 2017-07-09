function homeController($scope) {
    var currentCharacterOne = '';
    var currentCharacterTwo = '';
    var characterOneIsSet = 0;
    var characterTwoIsSet = 0;
    var numberOfCharactersSet = 0;

    $scope.showCharacterOne = false;
    $scope.showCharacterTwo = false;

    $scope.noQuestionAsked = true;
    $scope.rankedResult = [];
    
    $scope.$on('gotAnswer', function($event, data){
        $scope.rankedResult = data.answer;
        $scope.noQuestionAsked = false;
        $scope.isNoResults = data && data.answer && data.answer.length ? false : true;
    });

    $scope.$on('character-clicked', function(event, character) {
        if (currentCharacterOne == '') {
            currentCharacterOne = character.name;
            $scope.showCharacterOne = true;
            $scope.characterOneImagePath = character.figureOne;
        } else if (currentCharacterOne == character.name) {
            currentCharacterOne = '';
            $scope.showCharacterOne = false;
        } else if (currentCharacterTwo == '') {
            currentCharacterTwo = character.name;
            $scope.showCharacterTwo = true;
            $scope.characterTwoImagePath = character.figureOne;
        } else {
            currentCharacterTwo = '';
            $scope.showCharacterTwo = false;
        }
    });

}

export default homeController;
