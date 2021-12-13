require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const looger = require('./app/helpers/looger');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { dbConnect } = require('./config/mongo');
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))


const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api/1.0', require('./app/routes'));
app.use(morgan('dev'));
app.use(multer({
    dest: path.join(__dirname, 'public/uploads')
}).single('file'));

dbConnect();
app.listen(PORT, () => {
    looger.info(`${ process.env.APP_NAME } Iniciando...`);
    looger.info(`API listen with port ${ process.env.PORT }`);
});

io.on('connection', (socket) => {
    looger.info('Alguien se ha conectado al Sockets', socket);
})

