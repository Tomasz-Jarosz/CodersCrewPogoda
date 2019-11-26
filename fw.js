const displayFutureWeather = () => {
    let long;
    let lat;
    let cells = document.querySelectorAll('td');
    // let fwTemperatureDescription = document.querySelector('.fw-temperature-description');
    // let fwLocationTimezone = document.querySelector('.fw-location-timezone');
    // let fwIconPlace = document.querySelector('.fw-icon');
    // let fwTemperatureDegree = document.querySelector('.fw-temperature-degree');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const secondApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&lang=pl&APPID=342e58ac10157a7f0274028550e55fc5`;

            fetch(secondApi)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                        console.log(data);
                        for (i = 0; i < data.list.length; i++) {

                            let {
                                temp
                            } = data.list[i].main;
                            let {
                                description
                            } = data.list[i].weather[0];
                            // let {
                            //     country
                            // } = data.list[i].sys;
                            let {
                                icon
                            } = data.list[i].weather[0]
                            let {
                                pressure
                            } = data.list[i].main
                            let {
                                humidity
                            } = data.list[i].main

                            var tds = document.querySelectorAll('td');

                            function addElement() {
                                tds[i].innerHTML = `Temperature: ${Math.round(parseFloat(temp))}°C, Weather:${description}, Pressure: ${pressure}Pa, Humidity: ${humidity}% `;
                                const x = document.createElement("IMG");
                                x.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
                                x.setAttribute("width", "120");
                                x.setAttribute("height", "120");
                                x.setAttribute("alt", "Weather Icon");
                                let oldIcon = tds[i].Child;
                                if (oldIcon == undefined)
                                    tds[i].appendChild(x);
                                else
                                    tds[i].replaceChild(x, oldIcon);
                            }
                            addElement();

                        };
                    }


                )
        })
    }
}
displayFutureWeather();