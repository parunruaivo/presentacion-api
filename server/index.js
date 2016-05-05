import http from 'http';
import express from 'express';
import compression from 'compression';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import middleware from './middleware';
var mongoose = require('mongoose');
import api from './api';

mongoose.connect('mongodb://mongo/presentacion');

var app = express();
app.server = http.createServer(app);

app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser());

// api router
app.use('/api', api());

app.server.listen(8181, '0.0.0.0');

console.log(`Started on port 8181`);


export default app;
