const mongoose = require ("mongoose");

const mongodbURL = process.env.MONGODB_URL;

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    }
});

userDb = mongoose.createConnection(mongodbURL, {useNewUrlParser:true});

const User = userDb.model("User", UserSchema);
module.exports = User;