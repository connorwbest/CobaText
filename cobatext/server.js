const express = require("express");
const passport = require('passport');
const session = require('express-session');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const models = require("./models");
const routes = require('./routes')(passport);
const app = express();
const PORT = process.env.PORT || 3001;



// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport
app.use(session({ secret: 'superSecretPassword',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); 
require('./config/passport.js')(passport,models.User);

// Add routes, both API and view
app.use(routes);

mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/TextBookApp");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
