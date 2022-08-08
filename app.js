const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/index', (req, res, next)=> res.sendFile(__dirname + '/views/index.html'));

app.get('/about', (req, res, next)=> res.sendFile(__dirname + '/views/about.html'));

app.get('/works', (req, res, next)=> res.sendFile(__dirname + '/views/works.html'));

console.log(__dirname);

app.listen(3000, ()=>{
console.log('Listening on port 3000!');

})