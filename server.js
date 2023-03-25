require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session')
const user = require('./routes/user_routes')
const app = express();
const PORT = process.env.PORT || 3000
const oneDay = 1000 * 60 * 60 * 24;


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },

}))
app.use('/user',user)

app.listen(PORT, async function async() {
    console.log(`working on port: ${PORT}`)
});