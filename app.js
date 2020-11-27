const express = require('express')
const app = express()
const pug = require('pug')

const { createEventDateFilter } = require('./components/dates');
const { getEventsAsync } = require('./components/events');


app.set('view engine', 'pug')
app.set('views', './src/views')

 app.get('/', async function (req,res) {
     let events = await getEventsAsync();

     let { min_date, max_date } = req.query;
     let dateFilter = createEventDateFilter(min_date, max_date);
     let filtered = events.filter(dateFilter);

        res.render("index", { filtered })
 })



app.listen(3000, () => console.log("Listening on port 3000"))
