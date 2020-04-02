require('dotenv').config();

const express = require('express');
const body_parser = require('body-parser');

const log = require('./logger/logger');
const gis_api = require('./gis/api');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.use(body_parser.json());
app.use(express.json());
app.use('/gis' , gis_api);



app.listen(port , function(){
    log('info',`app started at port ${port}`);
});