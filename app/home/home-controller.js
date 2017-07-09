/* @ngInject */
function homeController($log, watsonFactory, $scope) {
    //Pass the search query here and return top 3 result documents
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
}

export default homeController;
