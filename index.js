const ws = require('ws');
const express = require('express');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new ws.Server({ server });

wss.on("connection", (socket) => {
  console.log("Cliente conectado!");

  socket.send("Olá mundo WebSocket!");
});