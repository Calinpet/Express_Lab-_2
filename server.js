// require packages/dependencies
const express = require("express");

// initialize the express application
const app = express();

// define routes
app.get("/greeting", function(request, response){
  response.send('Hello, stranger')
});

// tell the app to listen on port...
app.listen(3000)
