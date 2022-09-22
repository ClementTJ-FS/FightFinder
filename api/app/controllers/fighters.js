const express = require('express'),
  router = express.Router(),
  { Fight, Fighter } = require('../models/');

// READ all
// GET all Fighters
router.get('/', async (req, res) => {
  const fighters = await Fighter.findAll({
    include: [{ model: Fight }],
  });
  res.json(fighters);
});

// READ
// GET one Fighter
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  await Fighter.findByPk(id, {
    include: [{ model: Fight }],
  })
    .then((fighter) => {
      res.json(fighter);
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE
// POST new Fighter
// unused for now
// router.post('/', async (req, res) => {
//   const { name, age, weight, height, wins, losses } = req.body;
//   await Fighter.create({
//     name,
//     age,
//     weight,
//     height,
//     wins,
//     losses,
//   })
//     .then((fighter) => {
//       res.json(fighter);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// UPDATE
// POST update Fighter
// unused for now
// router.post('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, age, weight, height, wins, losses } = req.body;
//   await Fighter.update(
//     { name, age, weight, height, wins, losses, updatedAt: new Date() },
//     { where: { id } }
//   )
//     .then((fighter) => {
//       res.json(fighter);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// DELETE
// DELETE Fighter
// unused for now
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   await Fighter.destroy({ where: { id } })
//     .then((fighter) => {
//       res.send(`Fighter with id ${id} deleted`);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = router;
