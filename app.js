window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let icon = document.querySelector('.icon');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=pl&APPID=342e58ac10157a7f0274028550e55fc5`
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    let {
                        temp
                    } = data.main;
                    let {
                        description
                    } = data.weather[0];
                    let {
                        country
                    } = data.sys;
                    let {
                        icon
                    } = data.weather[0]
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = `${data.name} ${country}`;
                });
        });

    }
});
// https://cors-anywhere.herokuapp.com/
//342e58ac10157a7f0274028550e55fc5
//api.openweathermap.org/data/2.5/weather?lat=35&lon=139
//api.openweathermap.org/data/2.5/find?q=London&units=metric