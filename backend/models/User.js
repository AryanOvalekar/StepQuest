const mongoose = require ("mongoose");

const mongodbURL = process.env.MONGODB_URL;

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userDb = mongoose.createConnection(mongodbURL, {useNewUrlParser:true});

const User = userDb.model("User", UserSchema);
module.exports = User;