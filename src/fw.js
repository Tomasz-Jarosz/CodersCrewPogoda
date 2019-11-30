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
                        var xHour = document.querySelectorAll('.hour');
                        var date = new Date();
                        var hours = (Math.floor(date.getHours() / 3) * 3 + 3) % 24;
                        var minutes = "00";


                        for (let z = 0; z < 8; z++) {
                            xHour[z].innerText = hours < 24 ? `${hours}:${minutes}` : `${hours % 24}:${minutes}`;
                            hours += 3;
                        }


                        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                        var xDay = document.querySelectorAll('.day');
                        var date = new Date();
                        var day = date.getDay();

                        for (let z = 0; z < 5; z++) {
                            xDay[z].innerText = hours == 24 ? `${dayNames[day]}` : `${dayNames[day]}\\${dayNames[(day+1)%7]}`;
                            day = day == 6 ? 0 : ++day;
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


                            function addElement() {}

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





                    }


                )

        })
    }
}
displayFutureWeather();