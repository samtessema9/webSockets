const socket = new WebSocket('ws://localhost:4000');

socket.addEventListener('open', () => {
  console.log('WebSocket connection established.');

  // Send a message to the WebSocket server
  socket.send('Hello, WebSocket Server!');
});

socket.addEventListener('message', (event) => {
  const message = event.data;
  console.log('Received message:', message);
});

socket.addEventListener('close', () => {
  console.log('WebSocket connection closed.');
});