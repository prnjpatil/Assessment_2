const express = require('express');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
    const { op, value, date } = req.query;

    let result;
    if (op === 'add' && value && date) {
        const m = moment(date).add(parseInt(value), 'days');
        result = m.format('YYYY-MM-DD');
    } else if (op === 'add' && value && !date) {
        const m = moment().add(parseInt(value), 'weeks');
        result = m.format('YYYY-MM-DD');
    } else if (op === 'subtract' && value && date) {
        const m = moment(date).subtract(parseInt(value), 'days');
        result = m.format('YYYY-MM-DD');
    }

    if (result) {
        res.send(result);
    } else {
        res.status(400).send('Bad request');
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 8080');
});
