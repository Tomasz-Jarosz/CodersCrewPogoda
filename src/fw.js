// import {
//     myNewDate,
//     changeDate
// } from './moment.js';

// console.log(myNewDate);
const displayFutureWeather = () => {
    let long;
    let lat;

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
                        for (let i = 0; i < (data.length / 5); i++) {
                            let {
                                dt
                            } = data.list[i]

                            var xHour = document.querySelectorAll('.hour');

                            function addDate() {
                                var date = new Date((dt - 3600) * 1000)
                                var hours = date.getHours();
                                var minutes = "0" + date.getMinutes();
                                xHour[i].innerText = `${hours}:${minutes.substr(-2)}`;
                            }
                            addDate();
                        }
                        for (let i = 0; i < data.list.length; i++) {

                            let {
                                temp
                            } = data.list[i].main;
                            let {
                                description
                            } = data.list[i].weather[0];

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
                                x.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);
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