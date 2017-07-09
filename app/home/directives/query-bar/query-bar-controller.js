function queryBarController($scope, watsonFactory, $log) {
    $scope.characterSelected = false;
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

							$scope.$emit('gotAnswer',{answer: $scope.rankedResult});
					})
					.catch($log.log)
	}

    $scope.$on('character-clicked', function(event, character) {
        $scope.characterSelected = true;
        $scope.suggestedQuestions = character.suggestedQuestions ? character.suggestedQuestions : false;
    });
}

export default queryBarController;
