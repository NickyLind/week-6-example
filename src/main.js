import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js'

function clearFields()  {
  $("#location").val("");
  $(".showErrors").text("");
  $(".showHumdity").text("");
  $(".showTemp").text("");
}

function getElements(response)  {
  if(response.main) {
    $(".showHumidity").text(`the humidity in ${city} is ${body.main.humidity}%`);
    $(".showTemp").text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  } else  {
    $(".showErrors").text(`There was an error: ${response}`)
  }
}

async function makeApiCall(city)  {
  const response = await WeatherService.getWeather(city);
  getElements(response)
}

$(document).ready(function()  {
  $('#weatherLocation').click(function()  {
    let city = $('#location').val();
    clearFields();
    makeApiCall(city);
  });
});