const express = require('express');
const app= express();
const animalController = require('./controllers/animalController');
// const familyController = require('./controllers/familyController');


app.use(express.json());

app.get('/api/Animals', animalController.getAnimals)
app.get('/api/Family')
app.get('/api/Events')
app.get('/api/Animals/:location')
app.get('/api/Animals?breed=____')

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, ()=>{
    console.log(`Listening on ${SERVER_PORT}`)
    console.log("I'm a 3/4 stack developer!!")
})