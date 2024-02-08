const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/graphql");

mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});
