const express = require('express');
const app= express();

app.use(express.json());

app.get('/api/Animals')
app.get('/api/Family')
app.get('/api/Events')
app.get('/api/Animals/:Location')
app.get('/api/Animals?Breed=____')

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, ()=>{
    console.log(`Listening on ${SERVER_PORT}`)
})