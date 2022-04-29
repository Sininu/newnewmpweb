//entrance point for the API, contain database setup

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ImageModel = require("./models/Images");

const cors = require("cors"); //gonnna allow us to connect with frontend


//For posting data
app.use(express.json());
app.use(cors());

//Takes in string that rep' connection to cluster.
mongoose.connect(
    "mongodb+srv://databaseuser123:webdevelopment123@cluster0.8mjmy.mongodb.net/web_miniproject_database?retryWrites=true&w=majority"
); 


//requests (Api-requests or endpoints)
app.get("/getImages", (req, res) => {
    // Logic
    ImageModel.find({}, (err, result) => {
        if (err) {
            //send back error
            res.json(err);
        } else {
            //Send back result
            res.json(result);
            
        }
    });
});

//Need to make function async, 
app.post("/createImage", async (req, res) => {
    const image = req.body //data we want to send from frontend
    const newImage = new ImageModel(image);
    await newImage.save();

    res.json(image);
});




// =================== Listen ==================
app.listen(3001, () => {
    console.log("server runs");
});