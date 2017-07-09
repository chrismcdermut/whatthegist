function queryBarController($scope, watsonFactory, $log) {
    var characterOne = '';
    var characterTwo = '';
    $scope.characterSelected = false;
    $scope.queryPlaceholder = '';
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

	$scope.$on('clearSearchResults', function(){
		$scope.queryPlaceholder = '';
		$scope.characterSelected = false;
		$scope.formInput = '';
	});
}

export default queryBarController;
