const express = require('express');
const fs = require('fs');//filesystem module
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const time = new Date().toLocaleString();
  const ip = req.ip || req.connection.remoteAddress;
  const method = req.method;//get method
  const url = req.originalUrl;

  const logEntry = `[${time}] IP on: ${ip} Method is: ${method} URL: ${url}\n`;

  // Log to console
  console.log(logEntry);

  // Append to file
  fs.appendFile('access.log', logEntry, (err) => {
    if (err) console.error('Error writing to log file', err);
  });
  fs.appendFile('my_access.log', logEntry, (err) => {
    if (err) console.error('Error writing to log file', err);
  });

  next(); // Continue to the next route
});

app.get('/', (req, res) => {
  res.send('Logging done!');
});
app.get('/home', (req, res) => {
    res.send('tata bye bye!');
  });
  
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});