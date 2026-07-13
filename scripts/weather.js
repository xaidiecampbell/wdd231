alert("Javascript file is working")
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.77&lon=6.64&units=imperial&appid=23858379a0a8586a573c18f553493fee";
// const response = url

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            // displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();