const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

require('dotenv').config()

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Add routes, both API and view
app.use(routes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

{process.env.MONGO_ATLAS_PASS}

const uri = (`mongodb+srv://me:${process.env.MONGO_ATLAS_PASS}@googlebooks.i7x4a.mongodb.net/<dbname>?retryWrites=true&w=majority`)

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    //Confirm that DB is connected 
    console.log('MongoDB Connected!!')
  })
  .catch(err => console.log(err))
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
