// Selectors
const searchBtn = document.querySelector('.searchBtn');
const earth = document.querySelector('.searchEarth');
const geo = document.querySelector('.geoBtn');
const asteroid = document.querySelector('.neoBtn');

// Event Listeners
searchBtn.addEventListener('click', function() {
    sendApiRequest();
});

earth.addEventListener('click', function() {
    earthDetails();
});

geo.addEventListener('click', function() {
    gst();
})
asteroid.addEventListener('click', function() {
    getAsteroid();
})

// Data from the NASA API

// APOD
async function sendApiRequest() {
    let APIKEY = 'UCC4N2KU1vxrxQhX1IfwbSrXK2pErd66hNdubtLt';
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

// EARTH
async function earthDetails() {
    let APIKEY = 'UCC4N2KU1vxrxQhX1IfwbSrXK2pErd66hNdubtLt';
    let response = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=${APIKEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiDataEarth(data)
}

// GST
async function gst() {
    let APIKEY = 'UCC4N2KU1vxrxQhX1IfwbSrXK2pErd66hNdubtLt';
    let response = await fetch(`https://api.nasa.gov/DONKI/GST?startDate=2016-01-01&endDate=2016-01-30&api_key=${APIKEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    geoMagnetic(data)
}

// Neo Asteroid
async function getAsteroid() {
    let APIKEY = 'UCC4N2KU1vxrxQhX1IfwbSrXK2pErd66hNdubtLt';
    let response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-01-31&end_date=2021-02-05&api_key=${APIKEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    neoAsteroid(data)
}

// Functions

// APOD Function
function useApiData(data) {
    document.querySelector('.apodDate').innerHTML = `<h3>${data.date}</h3>`;
    document.querySelector('.apodTitle').innerHTML = `<h4>${data.title}</h4>`;
    document.querySelector('.content').innerHTML = `<p class="apodContent">${data.explanation}</p>`;
    document.querySelector('.apodImg').innerHTML = `<img src="${data.url}" class="img-url">`;
}

// EARTH Function
function useApiDataEarth(data) {
    document.querySelector('.earthDate').innerHTML = `<h3 style="margin-bottom: 20px;">Date: ${data.date} (wait for the image to be loaded)</h3>`;
    document.querySelector('.earth-content').innerHTML = `<img src="${data.url}" class="img-url">`;
}

// Geomaneic Function
function geoMagnetic(data) {
    document.querySelector('.geoId').innerHTML = `<h3>GST ID: ${data[0].gstID}</h3>`;
    document.querySelector('.observed').innerHTML = `<h3>Observed Time: ${data[0].allKpIndex[0].observedTime}</h3>`;
    document.querySelector('.source').innerHTML = `<h4>Source: ${data[0].allKpIndex[0].source}</h4>`;
    document.querySelector('.geoLink').innerHTML = `<a href="https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/GST/10074/-1">${data[0].link}</a>`;
}

function neoAsteroid(data) {
    document.querySelector('.asteroid-name').innerHTML = `<h3>Asteroid name: ${data.near_earth_objects["2021-01-31"][0].name}</h3>`;
    document.querySelector('.potential').innerHTML = `Potentially hazardous asteroid: ${data.near_earth_objects["2021-01-31"][0].is_potentially_hazardous_asteroid}`;
    document.querySelector('.kilometers').innerHTML = `Estimated km: <strong>Max: </strong>${data.near_earth_objects["2021-01-31"][0].estimated_diameter.kilometers.estimated_diameter_max}
    <strong>Min: </strong>${data.near_earth_objects["2021-01-31"][0].estimated_diameter.kilometers.estimated_diameter_min}`;

    document.querySelector('.asteroid-name2').innerHTML = `<h3>Asteroid name: ${data.near_earth_objects["2021-01-31"][1].name}</h3>`;
    document.querySelector('.potential2').innerHTML = `Potentially hazardous asteroid: ${data.near_earth_objects["2021-01-31"][1].is_potentially_hazardous_asteroid}`;
    document.querySelector('.kilometers2').innerHTML = `Estimated km: <strong>Max: </strong>${data.near_earth_objects["2021-01-31"][1].estimated_diameter.kilometers.estimated_diameter_max}
    <strong>Min: </strong>${data.near_earth_objects["2021-01-31"][1].estimated_diameter.kilometers.estimated_diameter_min}`;

    document.querySelector('.asteroid-name3').innerHTML = `<h3>Asteroid name: ${data.near_earth_objects["2021-01-31"][2].name}</h3>`;
    document.querySelector('.potential3').innerHTML = `Potentially hazardous asteroid: ${data.near_earth_objects["2021-01-31"][2].is_potentially_hazardous_asteroid}`;
    document.querySelector('.kilometers3').innerHTML = `Estimated km: <strong>Max: </strong>${data.near_earth_objects["2021-01-31"][2].estimated_diameter.kilometers.estimated_diameter_max}
    <strong>Min: </strong>${data.near_earth_objects["2021-01-31"][2].estimated_diameter.kilometers.estimated_diameter_min}`;

    document.querySelector('.asteroid-name4').innerHTML = `<h3>Asteroid name: ${data.near_earth_objects["2021-01-31"][3].name}</h3>`;
    document.querySelector('.potential4').innerHTML = `Potentially hazardous asteroid: ${data.near_earth_objects["2021-01-31"][3].is_potentially_hazardous_asteroid}`;
    document.querySelector('.kilometers4').innerHTML = `Estimated km: <strong>Max: </strong>${data.near_earth_objects["2021-01-31"][3].estimated_diameter.kilometers.estimated_diameter_max}
    <strong>Min: </strong>${data.near_earth_objects["2021-01-31"][3].estimated_diameter.kilometers.estimated_diameter_min}`;

    document.querySelector('.asteroid-name5').innerHTML = `<h3>Asteroid name: ${data.near_earth_objects["2021-01-31"][4].name}</h3>`;
    document.querySelector('.potential5').innerHTML = `Potentially hazardous asteroid: ${data.near_earth_objects["2021-01-31"][4].is_potentially_hazardous_asteroid}`;
    document.querySelector('.kilometers5').innerHTML = `Estimated km: <strong>Max: </strong>${data.near_earth_objects["2021-01-31"][4].estimated_diameter.kilometers.estimated_diameter_max}
    <strong>Min: </strong>${data.near_earth_objects["2021-01-31"][4].estimated_diameter.kilometers.estimated_diameter_min}`;

}