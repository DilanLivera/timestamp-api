// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/api/timestamp', apiRoutes);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//middlewear for errors
app.use((req, res, next) => {
  const error = new Error("Page Not Found!!!");
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  });
});

// listen for requests :)
const listener = app.listen(PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
