const express = require('express');
const User = require('../model/user');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ error });
  }
});

router.post('/', (req, res) => {
  res.json(req.body);
});

module.exports = router;
