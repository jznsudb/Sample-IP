const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = "mongodb+srv://Ayush:1234567890@cluster0.byhkbot.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connect to MongoDB");
    } catch(error) {
        console.log(error);
    }
}

connect();

app.listen(8000, ()=> {
    console.log("Started 8000");
});
