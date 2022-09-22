const sequelize = require('sequelize');
const express = require('express'),
  router = express.Router(),
  { User, LoginToken } = require('../models/'),
  bcrypt = require('bcrypt'),
  crypto = require('crypto');

// LOGIN
// POST login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // check if user already exists
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (!user) {
      res.status(400).json({ message: 'Invalid username/password' });
    } else {
      // check if password is correct
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: 'Invalid username/password' });
      } else {
        // create random token using crypto
        const token = crypto.randomBytes(20).toString('hex');
        // put token in LoginTokens table
        await LoginToken.create({
          token,
        });
        res.status(200).json({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          favSport: user.favSport,
          ava: user.ava,
          token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
});

// LOGOUT
// POST logout
router.post('/logout', async (req, res) => {
  const { token } = req.body;
  try {
    // check if token exists
    const loginToken = await LoginToken.findOne({
      where: {
        token,
      },
    });
    if (!loginToken) {
      res.status(400).json({ message: 'Invalid token' });
    } else {
      // delete token from LoginTokens table
      await LoginToken.destroy({
        where: {
          token,
        },
      });
      res.status(200).json({ message: 'Logout successful' });
    }
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
});

// RESET PASSWORD
// POST reset password
router.post('/reset', async (req, res) => {
  //username from body
  const { username } = req.body;
  const { host } = req.headers;
  try {
    // check if user exists
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (!user) {
      res.status(400).json({ message: 'Username not found.' });
    } else {
      // create random resetToken using crypto
      const resetToken = crypto.randomBytes(20).toString('hex');
      // put token in ResetTokens column
      await user.update({
        resetToken,
        resetTokenExpiry: Date.now() + 3600000,
      });
      // link to reset password page
      const resetLink = `http://${host}/auth/reset-password/${resetToken}`;
      res.status(200).json({
        name: user.name,
        email: user.email,
        resetLink,
      });
    }
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
});

// RESET PASSWORD
// GET reset password

router.get('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  try {
    // check if token exists
    const user = await User.findOne({
      where: {
        resetToken: token,
      },
    });
    if (!user) {
      res.status(400).json({ message: 'Invalid reset link.' });
    } else {
      // check if token is expired
      if (Date.now() > user.resetTokenExpiry) {
        res
          .status(400)
          .json({ message: 'Link expired, please request a new one.' });
      } else {
        res.redirect(`/reset/${user.id}`);
      }
    }
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
});

module.exports = router;
