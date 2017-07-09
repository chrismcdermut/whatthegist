function homeFactory($http) {
	
	function getQuestions() {
  		return $http.get('./questions.json');
  	}

    return {
    	getQuestions: getQuestions
    };
}

export default homeFactory;
