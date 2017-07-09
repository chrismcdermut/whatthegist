'use strict';

module.exports = Watson;


/* @ngInject */
function Watson($http) {
    return {
        search
    };

    function search(query) {
        // eslint-disable-next-line
        let url = `/watson`;

        return $http.post(url, {query})
    }
}

