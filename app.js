const express = require('express');

const app = express()

app.get('/', (req, res) => {
  console.log('received a  request.......')
  res.send('Hello Rahul! \n Welcome to Express World!!');
});

app.get('/rahulg', (req, res) => {
  console.log("rahulg called....");
  res.send("COming.....");
});

app.listen(3000, () => {
  console.log("starting Exress Application at port: 3000......")
  //process.env.NODE_ENV = "development"
  console.log("env::", process.env.NODE_ENV);
})