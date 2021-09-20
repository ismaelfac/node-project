require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { dbConnect } = require('./config/mongo');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/1.0', require('./app/routes'));
app.use(morgan('dev'));



dbConnect();
app.listen(PORT, () => {
    console.log('API listen with port',PORT)
})

