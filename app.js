const express = require('express')
const app = express()
const pug = require('pug')

const { createEventDateFilter } = require('./components/dates');
// const events = require('./components/events');
const { getEventsAsync } = require('./components/events');


app.set('view engine', 'pug')
app.set('views', './src/views')

 app.get('/', async function (req,res) {
     let events = await getEventsAsync();

     let { min_date, max_date } = req.query;
     let dateFilter = createEventDateFilter(min_date, max_date);
     let filtered = events.filter(dateFilter);
     res.json(filtered)
    //  const data = filtered
    //  res.render("index", { data })
 })
    // res.json(filtered);

//     let events = getEventsAsync();
//     let { min, max } = req.query;
//     let dateFilter = createEventDateFilter();
//     let filtered = Object.values(events).filter(dateFilter);
//     const data = filtered


app.listen(3000, () => console.log("Listening on port 3000"))
