// const displayFutureWeather = () => {
// let long;
// let lat;
// let fwTemperatureDescription = document.querySelector('.fw-temperature-description');
// let fwLocationTimezone = document.querySelector('.fw-location-timezone');
// let fwIconPlace = document.querySelector('.fw-icon');
// let fwTemperatureDegree = document.querySelector('.fw-temperature-degree');

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             console.log(position);
//             long = position.coords.longitude;
//             lat = position.coords.latitude;
//             const secondApi = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&lang=pl&APPID=342e58ac10157a7f0274028550e55fc5`;

//             fetch(secondApi)
//                 .then(response => {
//                     return response.json();
//                 })
//                 .then(data => {
//                     console.log(data);
//                     let {
//                         temp
//                     } = data.list[0].main;
//                     let {
//                         description
//                     } = data.list[0].weather[0];
//                     let {
//                         country
//                     } = data.list[0].sys;
//                     let {
//                         icon
//                     } = data.list[0].weather[0]
//                     fwTemperatureDegree.textContent = `${Math.round(parseFloat(temp))}°C`;
//                     fwTemperatureDescription.textContent = description;
//                     fwLocationTimezone.textContent = `${data.name} ${country} `;

//                     function addIcon() {
//                         const x = document.createElement("IMG");
//                         x.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
//                         x.setAttribute("width", "120");
//                         x.setAttribute("height", "120");
//                         x.setAttribute("alt", "Weather Icon");
//                         let oldIcon = fwIconPlace.firstChild;
//                         console.log(oldIcon);
//                         if (oldIcon == undefined)
//                             iconPlace.appendChild(x);
//                         else
//                             iconPlace.replaceChild(x, oldIcon)
//                     }
//                     addIcon();
//                 });

//         })
//     }
// }