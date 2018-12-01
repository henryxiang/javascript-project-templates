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

router.post('/', async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  const user = new User({ username, password, firstName, lastName });
  await user.save();
  return res.json(user);
  // res.json(req.body);
});

router.put('/', async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  const user = await User.findOneAndUpdate(
    { username },
    { password, firstName, lastName }
  );
  return res.json(user);
});

router.delete('/', async (req, res) => {
  const { username } = req.body;
  const user = await User.findOneAndRemove({ username });
  return res.json(user);
});

module.exports = router;
