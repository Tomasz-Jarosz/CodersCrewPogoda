import {
    myNewDate
} from './moment.js';

const displayExactPlaceWeather = (city) => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let iconPlace = document.querySelector('.icon');
    let time = document.querySelector('.time-info');

    time.textContent = `${myNewDate}`;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&APPID=342e58ac10157a7f0274028550e55fc5`
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
                    temperatureDegree.textContent = `${Math.round(parseFloat(temp))}°C`;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = `${data.name} ${country} `;


                    function addIcon() {
                        const x = document.createElement("IMG");
                        x.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
                        x.setAttribute("width", "120");
                        x.setAttribute("height", "120");
                        x.setAttribute("alt", "Weather Icon");
                        let oldIcon = iconPlace.firstChild;
                        console.log(oldIcon);
                        if (oldIcon == undefined)
                            iconPlace.appendChild(x);
                        else
                            iconPlace.replaceChild(x, oldIcon)
                    }
                    addIcon();
                });

        })
    }
}

const displayLocalWeather = () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let iconPlace = document.querySelector('.icon');
    let time = document.querySelector('.time-info');
    time.textContent = `${myNewDate}`;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=pl&APPID=342e58ac10157a7f0274028550e55fc5`;
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
                    } = data.weather[0];
                    temperatureDegree.textContent = `${Math.round(parseFloat(temp))}°C`;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = `${data.name} ${country} `;

                    function addIcon() {
                        const x = document.createElement("IMG");
                        x.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);
                        x.setAttribute("width", "120");
                        x.setAttribute("height", "120");
                        x.setAttribute("alt", "Weather Icon");
                        let oldIcon = iconPlace.firstChild;
                        console.log(oldIcon);
                        if (oldIcon == undefined)
                            iconPlace.appendChild(x);
                        else
                            iconPlace.replaceChild(x, oldIcon)
                    }
                    addIcon();
                });


        })
    }
}


document.getElementById('local-weather-btn').addEventListener('click', displayLocalWeather);
let sPWB = document.getElementById('search-place-weather-btn')
sPWB.addEventListener("click", function () {
    let inputCity = document.querySelector('input').value;
    return displayExactPlaceWeather(inputCity);
});