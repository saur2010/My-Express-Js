const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/about', (req, res) => {
	// res.send('About');
	res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/boot', (req, res) => {
	res.sendFile(path.join(__dirname, 'bootstrap.html'))
});

function run(ser){
	ser.listen(port, ()=> {
		console.log(`App listening port at http://localhost:${port}`)
	});
}

run(app)