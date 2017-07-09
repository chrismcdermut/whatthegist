'use strict';

const request = require('request');

module.exports = handle;

console.log('Starting gistice function');
function handle({query}, ctx, cb) {
    let url = `https://107e971a-6955-42da-b030-d7f553269849:QmiwQ5Py3dG7@gateway.watsonplatform.net/retrieve-and-rank/api/v1/solr_clusters/sc145e7ad4_a313_44dc_abb7_8272076ca6d3/solr/sh_collection/select?q=${query}z&wt=json&fl=id,title`;

    request(url, (err, status, res) => {
        err && cb(err);
        try {
            res = JSON.parse(res);
            cb(null, res.response.docs);
        } catch(e) {
            cb(new Error('Could not parse json'))

        }
    })
}
