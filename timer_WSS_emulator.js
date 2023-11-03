// Simple server
var stdin = process.openStdin();
const { WebSocket } = require('ws');

const wss = new WebSocket.Server({ port: 3000, path:'/timerws' });

// imprimir lo que se recibe
wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
});

// enviar lo que se escribe en consola
stdin.addListener("data", d => {
  const data = d.toString().replace('\r', '').replace('\n', '');
  wss.clients.forEach(client => {
      client.send(data);
  });
});

