require('dotenv').config();

const express = require('express');
const body_parser = require('body-parser');

const log = require('./logger/logger');
const gis_api = require('./gis/api');

const port = process.env.PORT;
const app = express();


app.use(body_parser.json());
app.use(express.json());
app.use('/gis' , gis_api);



app.listen(port , function(){
    log('info',`app started at port ${port}`);
});