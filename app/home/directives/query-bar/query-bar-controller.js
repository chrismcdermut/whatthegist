function queryBarController($scope) {
    $scope.characterSelected = false;

    $scope.$on('character-clicked', function(event, character) {
        $scope.characterSelected = true;
        $scope.suggestedQuestions = character.suggestedQuestions ? character.suggestedQuestions : false;
    });
}

export default queryBarController;
