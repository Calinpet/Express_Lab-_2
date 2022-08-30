const express = require("express");
const res = require('express/lib/response');
const port = 3000;
const app = express(); 

app.get('/', (req, res) => {
  res.send(`<h1>99 botles of beer on the wall</h1><a href="/98">Again!</a>`)
});

app.get("/:number_of_bottles", (req, res) => {
  let number_of_bottles = req.params.number_of_bottles;
  if(number_of_bottles > 0) {
    res.send(`<h1>${number_of_bottles} bottles of beer on the wall</h1><a href="/${number_of_bottles - 1}">Take one down, pass it around</a>`)
  } else {
       res.send(`<h1>No more beers!</h1><a href="/">Restart!</a>`) 
  }
})

// tell the app to listen on port...
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});