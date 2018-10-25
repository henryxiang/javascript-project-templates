const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id });
});

router.post('/', (req, res) => {
  res.json(req.body);
});

module.exports = router;
