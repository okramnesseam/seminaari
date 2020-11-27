var curr = new Date;
var first = curr.getDate() - curr.getDay() + 1;
var last = first + 6;

var firstday = new Date(curr.setDate(first)).toISOString();
var lastday = new Date(curr.setDate(last)).toISOString();

console.log(firstday)
console.log(lastday)

function createEventDateFilter(min = firstday, max = lastday) {
    return function (event) {
        let { starting_day } = event.event_dates;
        return min <= starting_day && starting_day <= max;
    }
}

module.exports = {
    createEventDateFilter
};