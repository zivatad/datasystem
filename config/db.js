// database 
const mongoose = require("mongoose");

// Replace this with your MONGOURI.
//const dbURL = "mongodb://admin:vlladmin01@ds011472.mlab.com:11472/heroku_m8ckh683";
const dbURL = "mongodb+srv://vlladmin:vlladmin@cluster0.pn3py.mongodb.net/VLL?retryWrites=true&w=majority"; //server

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
