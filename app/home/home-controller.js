/* @ngInject */
function homeController($log, watsonFactory, $scope) {
    //Pass the search query here and return top 3 result documents
    $scope.noQuestionAsked = true;
    $scope.rankedResult = [];
    $scope.$on('gotAnswer', function($event, data){
        $scope.rankedResult = data.answer;
        $scope.noQuestionAsked = false;
        $scope.isNoResults = data && data.answer && data.answer.length ? false : true;
    });
}

export default homeController;
