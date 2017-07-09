function homeController($scope) {
    $scope.noQuestionAsked = true;
    $scope.rankedResult = [];
    
    $scope.$on('gotAnswer', function($event, data){
        $scope.rankedResult = data.answer;
        $scope.noQuestionAsked = false;
        $scope.isNoResults = data && data.answer && data.answer.length ? false : true;
    });

    $scope.$on('clearSearchResults', function(){
        $scope.noQuestionAsked = true;
    });
}

export default homeController;
