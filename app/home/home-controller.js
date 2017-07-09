/* @ngInject */
function homeController($log, watsonFactory, $scope) {
    //Pass the search query here and return top 3 result documents
    watsonFactory.search("did batman ever die")
        .then(function(response) {
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
        })
        .catch($log.log)
}

export default homeController;
