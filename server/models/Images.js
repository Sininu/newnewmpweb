const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    //model that have fields and values the schema contains
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    img: {
        data: Buffer,
        contentType: String,
    },
});


//creating model out of this schema
const ImageModel = mongoose.model("images", ImageSchema)
//export it so we have access to it.
module.exports = ImageModel; 