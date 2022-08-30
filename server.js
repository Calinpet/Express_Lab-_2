// require packages/dependencies
const express = require("express");


// initialize the express application
const app = express();

// define routes
app.get("/", (req, res) => {
  res.send("<H1>Hey there!!!</H1>");
});

app.get("/greeting/:name?", (req, res) => {
  if (req.params.name) {
    res.send(
      "<H1>What's up, " + req.params.name + "! It's so great to see you!</H1>"
    );
  } else {
    res.send("<H1>Hello, Stranger</H1>");
  }
});

// Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Your tip is " + req.params.total * (req.params.tipPercentage/100))
})


//Magic 8 Ball//

const magic = [
  "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"
  ]
const random = magic[Math.floor(Math.random() * magic.length)] 

app.get("/magic/:random", (req, res) => {
    res.send(`Magic ball says ${random}`)
});



// tell the app to listen on port...
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// tell the app to listen on port...


