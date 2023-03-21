import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import viewsRouter from './routes/views.router.js';
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
//import { Server } from 'socket.io';

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(__dirname + '/public'));

//Configuración Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Routes
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/views', viewsRouter);

//Configuro el SocketServer
const httpServer = app.listen(port, () => console.log(`Listen in port ${port}`));

//const messages = [];

//const socketServer = new Server(httpServer);

// socketServer.on('connection', (socket) => {
//     console.log(`Client conected id: ${socket.id}`);

//     socket.on('disconnect', () => {
//       console.log(`Client disconected id: ${socket.id}`);
//     });

//     socket.emit('welcome', `Welcome to Websocket- Client id: ${socket.id}`);

//     socket.on('answerWelcome', (text) => {
//       console.log(text);
//     });

//     socket.on('message', (text) => {
//       messages.push({ ClientID: socket.id, text });
//       socketServer.emit('allMessages', messages);
//     });
//   });
