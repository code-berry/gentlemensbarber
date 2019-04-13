const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const aos = require('aos');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', function(req, res) {
	let day = new Date();
	day = day.getDay();
	let hours = [];
	switch (day) {
		case 0:
			hours = ['11am-5pm', '12pm-5pm'];
			break
		default: 
			hours = ['10am-9pm', '9am-9pm'];
	}
	res.render('home', {hours:hours});
});

app.get('/locations', (req, res) => {
	res.render('locations');
});

app.get('/contact', (req, res) => {
	res.render('contact');
});


app.listen(3000, function() {
	console.log('Application started on port 3000');
});