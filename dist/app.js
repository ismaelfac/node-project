"use strict";

require('dotenv').config();

var express = require('express');

var cors = require('cors');

var app = express();

var _require = require('./config/mongo'),
    dbConnect = _require.dbConnect;

var PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/api/1.0', require('./app/routes'));
dbConnect();
app.listen(PORT, function () {
  console.log('API listen with port', PORT);
});