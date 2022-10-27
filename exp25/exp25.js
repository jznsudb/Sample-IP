const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 7860;
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "secret"
}));

const user = {
    name: "Ayush",
    age: 19
}

app.get("/login", (req, res) => {
    req.session.user = user;
    req.session.save();
    return res.send("User Logged in");
})

app.get("/user", (req, res) => {
    const userdetail = req.session.user;
    return res.send('User Name is '+userdetail.name+" And Age is "+userdetail.age);
})

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("User Logged out");
})

app.get("/", (req, res) => {
    res.send("Welcome to Ayush Website")
})

app.listen(PORT, ()=> console.log('SERVER AT '+PORT));