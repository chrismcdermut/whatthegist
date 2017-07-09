function queryBarController($scope, questions) {

	const question = questions;

 	var topFAQ = [
		{
			question: "Have they ever fought together",
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


}

export default queryBarController;
