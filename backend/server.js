const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config()

const UserModel = require("./models/User");

const username = "Aryan"
const email = "aryanovalekar@gmail.com"
const password = "bruh"

const user = new UserModel({username: username, email: email, password: password})

user.save();

app.listen(3001, ()=> {
    //  console.log('Server up and running on 3001');
  });