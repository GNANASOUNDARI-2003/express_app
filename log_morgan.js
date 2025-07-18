const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();
const PORT = 3000;

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }//a-append method
);

app.use(morgan('combined', { stream: accessLogStream }));//combined-all logs like ip,method,url--use-middle ware

app.get('/', (req, res) => {
  res.send(' Morgan is runs to access.log file!');
});
app.get('/home', (req, res) => {
    res.send(' this is home!');
  });
  app.get('/about', (req, res) => {
    res.send(' nothing about us..go away!');
  });

app.listen(PORT, () => {
  console.log(` Server runs at http://localhost:${PORT}`);
});