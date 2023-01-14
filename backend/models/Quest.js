const mongoose = require ("mongoose");

const mongodbURL = process.env.QUESTDB_URL;

const QuestSchema = new mongoose.Schema({

    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    previewimg: {
        type: String,
        required: false,
    },
    length: {
        type: String,
        required: false,
    },
    difficulty: {
        type: String,
        required: false,
    },
    color: {
        type: String,
        required: false,
    }

});

questDb = mongoose.createConnection(mongodbURL, {useNewUrlParser:true});

const Quest = questDb.model("Quest", QuestSchema);
module.exports = Quest;