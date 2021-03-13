import {
  getJSON,
  getLocation
} from './utilities.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

function buildURL(location) {
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;
  const url = baseUrl + `&latitude=${latitude}&longitude=${longitude}&maxradiuskm=100`
  console.log(url)
  const newJSON = getJSON(url);
  console.log(newJSON)
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// const newLocation = getLocation(options);
navigator.geolocation.getCurrentPosition(buildURL, error, options);

// console.log(newLocation);
// console.log(newLocation.Promise.coords)

// buildURL(newLocation);

// navigator.geolocation.getCurrentPosition(buildURL, error, options);


