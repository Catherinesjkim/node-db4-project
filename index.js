// similar to import express from 'express';
const express = require('express'); // npm i express
// const shortid = require('shortid'); // <<<<<<<<<<<<<<< npm i shortid

const server = express();

let hubs = [];

server.use(express.json()); // <<<<<<<<<<<<<<<< add this line 

// request or route handler - at least 2 arguments: req, res
// req: obj
// res: response
server.get('/', (req, res) => {
  res.status(200).json({ api: 'running...' });
});

server.post('/api/hubs', (req, res) => {
  // axios.post(/api/hubs, data) <-- the data shows up as the req.body on the server
  const hubInfo = req.body;

  // validate that the hubinof is correct before saving
  // hubInfo.id = shortid.generate();

  hubs.push(hubInfo);

  res.status(201).json(hubInfo);
});

// write a GET /hello endpoint that returns an obj like so: { hello: "WEB PT 11" }

// watching for connections
const PORT = 5000;
server.listen(PORT, () => console.log(`\n \n ** API on http:localhost:${PORT} **\n`)
);

// to run the server use: node index.js

