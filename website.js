const express = require('express')
const axios = require('axios');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
var path = require('path');
var server  = require('http').createServer(app);

//BELOW DONE AUTOMATICALLY (parses the url into js object attributes)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;



app.use('/static', express.static('/Users/anushee22/Desktop/wdbfinal));

app.get('/static', (req, res) => {
    res.sendFile(('/Users/anushee22/Desktop/wdbfinal/index.html'));
})
//can send HTML file to this web server using res.send (can straight up type html code in the ())

//http://localhost:3000/create/?location=berkeley&time=morning&who=friends
app.get('/create', (req, res) => {
    let location = req.query.location;
    let time = req.query.time;
    let who = req.query.who;
    let filename = time + '.' + who;
    fs.appendFile(filename, ' ', (err) => {
        if (err) res.send(err);
        res.send({
            "message": "File created!",
            "location": location,
            "time": time,
            "who": who
        })
    })
})

app.get('/nasa', (req, res) => {
    res.send("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.send(error);
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

