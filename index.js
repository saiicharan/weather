const express = require("express");
const app = express();
var cors = require('cors');

const axios = require('axios');

var cities = require("./cities");

app.use(cors());

const port = process.env.PORT || 8081;

const apiKey = process.env.WEATHER_API_KEY;

const getRandomCity = () => {
    const randomCityIndex = Math.floor(Math.random() * cities.length);
    return cities[randomCityIndex];
}

async function getWeatherData() {
    const baseUrl = process.env.WEATHER_URL;
    const city = getRandomCity();
    const longitude = city.lng;
    const latitude = city.lat;
    let response;

    try {
        response = await axios.get(baseUrl + '?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey + '&units=metric');
    } catch(err) {
        console.log(err);
    }
    return response.data;
}

app.use(cors());

app.get('/', function (req, res) {
    getWeatherData().then((result) => res.json(result));
});

var server = app.listen(port, () => {
    console.log("Server running on port " + port);
});

module.exports = server;