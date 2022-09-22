const express = require('express'),
  router = express.Router(),
  { User, LoginToken } = require('../models/'),
  bcrypt = require('bcrypt');

// READ all
// GET all Users
// router.get('/', async (req, res) => {
//   const users = await User.findAll();
//   res.json(users);
// });

// READ
// GET one User
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  await User.findByPk(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE/REGISTER
// POST new User
router.post('/', async (req, res) => {
  const { username, name, email, password } = req.body;
  try {
    // check if user already exists
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (user) {
      res.status(400).json({ message: 'Username already exists' });
    } else {
      // hash password
      const hash = await bcrypt.hash(password, 10);
      // create new user
      const newUser = await User.create({
        username,
        name,
        email,
        password: hash,
      });
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
});

// UPDATE
// POST update User
router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, favSport, password, token } = req.body;

  // check if token is valid
  const loginToken = await LoginToken.findOne({
    where: {
      token,
    },
  });
  if (!loginToken) {
    res.status(400).json({ message: 'Please login.' });
  } else {
    try {
      // check if user exists
      const user = await User.findByPk(id);
      if (!user) {
        //if no user found
        res.status(400).json({ message: 'User not found.' });
      } else {
        // if user found
        // check if any data is empty
        if (!name) {
          // empty name
          user.name = user.name;
        } else {
          // not empty name
          user.name = name;
        }
        if (!email) {
          user.email = user.email;
        } else {
          user.email = email;
        }
        if (!favSport) {
          user.favSport = user.favSport;
        } else {
          user.favSport = favSport;
        }
        if (!password) {
          user.password = user.password;
        } else {
          // hash password
          const hash = await bcrypt.hash(password, 10);
          user.password = hash;
        }
        // remove resetToken/resestTokenExpiry from user
        user.resetToken = null;
        user.resetTokenExpiry = null;
        user.updatedAt = new Date();
        // update user
        await user.save();
        res.status(200).json({
          username: user.username,
          name: user.name,
          email: user.email,
          favSport: user.favSport,
        });
      }
    } catch (error) {
      res.status(500).json({ message: `Server Error: ${error}` });
    }
  }
});

// DELETE
// DELETE User
// Unused for now
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   await User.destroy({ where: { id } })
//     .then((user) => {
//       res.send(`User ${id} deleted`);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = router;
