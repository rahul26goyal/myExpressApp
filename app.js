const express = require('express');

const app = express()

app.get('/', (req, res) => {
  console.log('received a  request.......')
  res.send('Hello Rahul! \n Welcome to Express World!!');
});

app.get('/rahulg', (req, res) => {
  console.log("/rahulg is called....");
  res.send("OK.I m listening.")
});

app.listen(3000, () => {
  console.log("Starting Application at Port: 3000......")
  console.log("env::", process.env.NODE_ENV);
})