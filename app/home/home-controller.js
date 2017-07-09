/* @ngInject */
function homeController($log, watsonFactory, $scope) {
    //Pass the search query here and return top 3 result documents
    var currentCharacterOne = '';
    var currentCharacterTwo = '';
    var characterOneIsSet = false;
    var characterTwoIsSet = false;
  
    $scope.noQuestionAsked = true;
    $scope.rankedResult = [];
    $scope.$on('gotAnswer', function($event, data){
        console.log('getting the answer in home controller');
        console.log(data);
        $scope.rankedResult = data.answer;
        console.log('$scope.ranked here');
        console.log($scope.rankedResult);

        $scope.noQuestionAsked = false;
        $scope.isNoResults = data && data.answer && data.answer.length ? false : true;
    });
  
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
