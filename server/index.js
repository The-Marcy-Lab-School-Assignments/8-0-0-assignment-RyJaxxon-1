/** FEEDBACK: Great job! */
// Import Express and create the `app` object.
const express = require('express');
const app = express();

// Controllers
const serveIndex = (req,res,next) => {
    const { name, color } = req.query
    res.send(`<h1>Sup ${name}, heard you like ${color}, me too.</h1>`);
}

const serveHome = (req,res,next) => {
    const { videoGame, skillLevel } = req.query
    res.send(`<h1>Sup, you wanna play ${ videoGame }? Only if you're ${ skillLevel } or higher though, I don't play with noobs.</h1>`);
}
const serveHello = (req, res, next) => {
    res.send('hello');
  }
  const serveData = (req, res, next) => {
    const data = [{ name: 'ben' }, { name: 'zo' }, { name: 'carmen' }];
    res.send(data);
  }

// Endpoints
app.get('/', serveIndex);
app.get('/home',serveHome);
app.get('/api/hello', serveHello);
app.get('/api/data', serveData);


// Create Listener
const port = 8080
app.listen(port, () => console.log(`listening at http://localhost:${port}`))