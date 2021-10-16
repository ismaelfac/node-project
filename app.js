require('dotenv').config();
const express = require('express');
const looger = require('./app/helpers/looger');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { dbConnect } = require('./config/mongo');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/1.0', require('./app/routes'));
app.use(morgan('dev'));

dbConnect();
app.listen(PORT, () => {
    looger.info('API listen with port',this.PORT);
});

io.on('connection', (socket) => {
    looger.info('Alguien se ha conectado al Sockets', socket);
})

