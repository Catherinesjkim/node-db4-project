const express = rquire('express');

const db = require('../data/connection.js');

const router = express.Route();

router.get('/', (req, res) => {
  db('recipes')
    .then(recipes => {
      res.status(200).json(recipes));
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve recipes' });
    });

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('recipes')
    .where({ id })
    .first()
    .then(recipe => {
      res.status(200).json(recipe);
    })
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to retrieve the id of the recipe that you requested' });
  });

  module.exports = router;