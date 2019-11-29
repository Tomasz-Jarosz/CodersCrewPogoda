let moment = require('moment');
let changeDate = function (x) {
    moment(x).format('LT')
}
let myNewDate = moment(new Date()).format('LT');
export {
    myNewDate,
    changeDate
};