const express = require('express'),
  router = express.Router(),
  { Fight, Fighter } = require('../models/');

// READ all
// GET all Fights
router.get('/', async (req, res) => {
  const fights = await Fight.findAll({
    include: [{ model: Fighter }],
  });
  res.json(fights);
});

// READ
// GET one Fight
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  await Fight.findByPk(id, {
    include: [{ model: Fighter }],
  })
    .then((fight) => {
      res.json(fight);
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE
// POST new Fight
// unused for now
// router.post('/', async (req, res) => {
//   const { eventId, isTitle, rounds } = req.body;
//   await Fight.create({
//     eventId,
//     isTitle,
//     rounds,
//   })
//     .then((fight) => {
//       res.json(fight);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// UPDATE
// POST update Fight
// unused for now
// router.post('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { eventId, isTitle, rounds } = req.body;
//   await Fight.update(
//     { eventId, isTitle, rounds, updatedAt: new Date() },
//     { where: { id } }
//   )
//     .then((fight) => {
//       res.json(fight);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// DELETE
// DELETE Fight
// unused for now
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   await Fight.destroy({ where: { id } })
//     .then((fight) => {
//       res.send(`Fight with id ${id} deleted`);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = router;
