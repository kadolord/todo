const express = require('express');
const cors  = require('cors');
const bodyParser = require('body-parser');
const app = express();

//Routes
const Landing = require('./routes/api/landingRoute');


require('dotenv').config();
const Port  = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use('/', Landing);

app.listen(Port, () => {
    console.log(`Connected to port: ${Port}`);
})