'use strict';

const app = require('express')();
const watson = require('./watson');

app.post('/watson', (req, res) => {
    watson(req, null, (err, watsonRes) => {
        if (err) {
            return res.status(400).send('Error getting watson data');
        }
        return res.status(200).send(watsonRes);
    });
});

app.listen(3000, () => {
    // eslint-disable-next-line
    console.log('Server listening on port 3000')
});
