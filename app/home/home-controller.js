
function homeController($scope, $rootScope) {
var currentCharacterOne = '';
var currentCharacterTwo = '';
var characterOneIsSet = false;
var characterTwoIsSet = false;

$scope.showCharacterOne = false;
  $scope.$on('character-clicked', function(event, character) {
if(currentCharacterOne == ''){
      currentCharacterOne = character.character.name;
      $scope.showCharacterOne = true;
      $scope.characterOneImagePath = character.character.figureOne;
} else {
  currentCharacterOne = '';
  $scope.showCharacterOne = false;
}

  // if(currentCharacterOne == '' && currentCharacterTwo == ''){
  //     currentCharacterOne = character.character.name;
  //     $scope.showCharacterOne = true;
  //     $scope.characterOneImagePath = character.character.figureOne;
  // } else if (currentCharacterOne !== '' && currentCharacterTwo == ''){
  //   currentCharacterTwo = character.character.name;
  //   $scope.showCharacterTwo = true;
  //   $scope.characterTwoImagePath = character.character.figureTwo;
  // } else if (currentCharacterOne !== '' && currentCharacterTwo !== '' && currentCharacterOne == character.character.name){
  //     currentCharacterOne = '';
  //     $scope.showCharacterOne = false;
  // } else if(currentCharacterOne !== '' && currentCharacterTwo !== '' && currentCharacterTwo == character.character.name){
  //     currentCharacterTwo = '';
  //     $scope.showCharacterTwo = false;
  // } else if(currentCharacterOne == '' && currentCharacterTwo !== '' && currentCharacterTwo !== character.character.name){
  //   currentCharacterOne = character.character.name;
  //   $scope.showCharacterOne = true;
  //   $scope.characterOneImagePath = character.character.figureOne;
  // } else {
  //   currentCharacterOne = '';
  //   currentCharacterTwo = '';
  //   characterOneIsSet = false;
  //   characterTwoIsSet = false;
  // }

});

}

export default homeController;
