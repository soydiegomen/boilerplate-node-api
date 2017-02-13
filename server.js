var app = require('./index');
var mongoose = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Note that there's not much logic in this file.
// The server should be mostly "glue" code to set things up and
// then start listening
app.listen(3000, function (error) {
  if (error) {
    log.error('Unable to listen for connections', error)
    process.exit(10)
  }
  console.log("Node server running on http://localhost:3000");
})