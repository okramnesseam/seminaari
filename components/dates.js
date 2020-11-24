var curr = new Date; // get current date
var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
var last = first + 6; // last day is the first day + 6

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