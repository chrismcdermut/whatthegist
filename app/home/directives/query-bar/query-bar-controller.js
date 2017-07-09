function queryBarController(questionsList) {
	const qb = this;
	qb.questions = questionsList;

	// qb.displayQuestionList = function() {
	// 	console.log('BOOO')
	// 	document.getElementsByClassName('qb-container').style.display = block;
	// }

	document.getElementById("querybar").addEventListener("click", function(){
    	document.getElementById('qb-container').style.display = 'block';
	});
}

export default queryBarController;