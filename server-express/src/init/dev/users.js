const User = require('../../model/user');

const users = [
  {
    username: 'jdoe',
    password: 'test123',
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    username: 'dsmith',
    password: 'test123',
    firstName: 'David',
    lastName: 'Smith'
  }
];

module.exports = async () => {
  try {
    users.forEach(async u => {
      const user = new User(u);
      await user.save();
    });
  } catch (error) {
    console.error(error);
  }
};
