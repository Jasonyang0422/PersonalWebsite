const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, "../browser")));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "../index.html"));
})

var port = process.env.port || process.env.PORT || 3000;
app.listen(port, () => { console.log('Application Running on port ' + port) });