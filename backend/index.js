let cars = require('./data/cars.json');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.static('./images'));

app.get('/cars', (request, response) => {
    response.json(cars);
});

app.listen(4000, () => {
    console.log(`Backend started!`);
});