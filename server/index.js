const express = require('express');
const app= express();
const animalController = require('./controllers/animalController');
// const familyController = require('./controllers/familyController');


app.use(express.json());

app.get('/api/animals', animalController.getAnimals)
app.get('/api/family')
app.get('/api/events')
app.get('/api/animals/filter', animalController.filterAnimal)
app.get('/api/animals/:species', animalController.searchAnimals)

app.put('/api/animals/:')

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, ()=>{
    console.log(`Listening on ${SERVER_PORT}`)
    console.log("I'm a 3/4 stack developer!!")
})