const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config()
app.use(express.json());    
app.use(cors())

const UserModel = require("./models/User");



//const user = new UserModel({username: username, email: email, password: password})
//user.save();

app.post("/login", async (req, res) =>{  //check if an account exists
    const email = req.body.email;
    const password = req.body.password;
    UserModel.find({email: email, password: password}, (err, result)=>{
        
        if(err){    
            res.send(err);
        }
        if(result){
        res.send(result);}
        else{   
            res.send("Account Not Found")
        }
    })
})

app.listen(3001, ()=> {
    console.log("LOADED")
  });