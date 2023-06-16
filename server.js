const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
      } 
});

app.use(cors({origin: '/*'}))

io.on('connection', (socket) => {
  console.log('WebSocket connection established.');
  console.log(socket.id)

  socket.on('message', (message) => {
    console.log('Received message:', message);
    socket.emit('message', `Server received: ${message}`);
  });

  socket.on('disconnect', () => {
    console.log('WebSocket connection closed.');
  });
});

// Express routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

server.listen(4000, () => {
  console.log('Express server listening on port 4000.');
});
