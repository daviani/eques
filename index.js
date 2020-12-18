const port = process.env.PORT || 8000;

const express = require('express');
const app = express();
const bands = require('./band.json');

app.use(express.json());

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}`);
});

app.get('/bands', (req, res) => {
  // res.send("liste des groupes")
  res.status(200).json(bands);
});

app.get('/bands/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const band = bands.find(band => band.id === id);
  res.status(200).json(band);
});

app.post('/bands', (req, res) => {
  bands.push(req.body);
  res.status(200).json(bands);
});

app.put('/bands/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.params);
  let band = bands.find(band => band.id === id);
  band.name = req.body.name;
  band.genre = req.body.genre;
  res.status(200).json(band);
});

app.delete('/bands/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let band = bands.find(band => band.id === id);
  band.splice(bands.indexOf(band), 1)
  res.status(200).json(band);
});

