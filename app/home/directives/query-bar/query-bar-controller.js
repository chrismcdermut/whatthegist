function queryBarController($scope, questions, watsonFactory, $log) {

	const question = questions;

 	var topFAQ = [
		{
			question: "Have they ever fought together?",
			rank: 1
		},
		{
			question: "Who is smarter?",
			rank: 2
		},
		{
			question: "When did they first meet?",
			rank: 3
		}
	];

	$scope.getTopFAQ = function (){
			return topFAQ;
	};

	$scope.formInput = "Ask a question about DC heroes";
	$scope.submitToWatson = function (){
			console.log('submitted input: ' + $scope.formInput);
			watsonFactory.search($scope.formInput)
					.then(function(response) {
							console.log('Watson raw response');
							console.log(response);
							$scope.rankedResult = [];
							$scope.isNoResults = false;
							if(response.status === 200 && response.data.numFound !== 0) {
									let resultSet = response.data.docs;
									for(let i = 0; i < 3; i++) {
											$scope.rankedResult[i] = resultSet[i].title[0] || '';
									}
							} else {
									$scope.isNoResults = true;
							}
							console.log('result from Watson');
							console.log($scope.rankedResult);

							$scope.$emit('gotAnswer',{answer: $scope.rankedResult});
					})
					.catch($log.log)
	}

function queryBarController($scope) {
    $scope.characterSelected = false;
    $scope.suggestedQuestions = {
        "How many batmobiles are there": "111",
        "How many crimes has he solved": "222",
        "Who's his strongest enemy": "3333"
    };

}

export default queryBarController;
