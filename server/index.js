const express = require('express');
const mongoose=require('mongoose');
const app = express();
require('./services/passport');
const authRoutes= require('./routes/authRoutes');

mongoose.connect('mongodb+srv://Kostis:atlas987654321coolsend!@cluster0.orx5r.mongodb.net/test?retryWrites=true&w=majority');

authRoutes(app);

app.get('/', () => {
    message: 'root route'
})

const port = process.env.PORT || 5000;
app.listen(port);