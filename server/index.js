const express = require('express');
const mongoose=require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
require('./models/User');
require('./services/passport');
const authRoutes= require('./routes/authRoutes');
const keys = require('./keys');


mongoose.connect(keys.mongoURI, {useNewUrlParser: true,useUnifiedTopology: true})
    .then( () => {
        console.log('Connected to mongo ');
    });


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieSecret]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.get('/', (req, res) => {
    res.send({message: 'Test route!'});
});

const port = process.env.PORT || 5000;
app.listen(port);