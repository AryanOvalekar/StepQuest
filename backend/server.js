const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config()
app.use(express.json());    
app.use(cors())

const UserModel = require("./models/User");
const QuestModel = require("./models/Quest");



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

app.post ('/register', async(req, res) =>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const user = new UserModel({username: username, password: password, email: email})
    await user.save();
    res.send("Registered New User");
})

app.post("/fetchquests", async (req, res) =>{  //check if an account exists
    const email = req.body.email;
    const password = req.body.password;
    QuestModel.find((err, result)=>{
        
        if(err){    
            res.send(err);
        }
        if(result){
        res.send(result);}
        else{   
            res.send("Cannot Send Quests")
        }
    })
})

const title = "Journey through the Himalayas"
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
const previewimg = "https://cdn.discordapp.com/attachments/1063590170319917127/1063614979716157470/samsommer-vddccTqwal8-unsplash.jpg"
const difficulty = "Hard"
const length = "1 Day"

const img = "https://cdn.discordapp.com/attachments/1063590170319917127/1063614994031333478/jared-erondu-LoMs1_wq3tU-unsplash.jpg"
const description2 = "you have reached a hill..."
const criteria = 1000
const criteriaType = "steps"
const objective = {img: img, description: description2, criteria: criteria, criteriaType:criteriaType}

const Quest = new QuestModel({title: title, description: description, previewimg: previewimg, difficulty: difficulty, length: length, objectives: [objective]})
//Quest.save();

app.listen(3001, ()=> {
    console.log("LOADED")
  });