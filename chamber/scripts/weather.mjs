// alert("Javascript file is working")
// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

async function getWeather() {
    const myTown = document.querySelector('#town');
    const myDescription = document.querySelector('#description');
    const myTemperature = document.querySelector('#temperature');
    const myGraphic = document.querySelector('#graphic');
    const myKey = "23858379a0a8586a573c18f553493fee"
    const myLat = "42.26990400511081"
    const myLon = "-71.77811424327732"
    const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;



    async function apiFetch() {
        try {
            const response = await fetch(myUrl);
            if (response.ok) {
                const data = await response.json();
                console.log(data); // testing only
                displayResults(data); // uncomment when ready
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    apiFetch();

    function displayResults(data) {
        console.log('hello')
        myTown.innerHTML = data.name;
        myDescription.innerHTML = data.weather[0].description;
        myTemperature.innerHTML = `${data.main.temp}&deg;F`;
        const iconSrc =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        myGraphic.setAttribute('src', iconSrc);
        myGraphic.setAttribute('alt', data.weather[0].description);

    }
}
export { getWeather };
