const express = require('express');
const mongoose=require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config({path: './config.env'});
require('./models/User');
require('./models/Recipient');
require('./models/Campaign');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const campaignRoutes = require('./routes/campaignRoutes');


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,useUnifiedTopology: true})
    .then( () => {
        console.log('Connected to mongo ');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);
campaignRoutes(app);

app.get('/', (req, res) => {
    res.send({message: 'Test route!'});
});

const port = process.env.PORT || 5000;
app.listen(port);