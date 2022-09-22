const express = require('express'),
  router = express.Router(),
  { Event, Fight, Fighter } = require('../models');

// READ all
// GET all events
router.get('/', async (req, res) => {
  const events = await Event.findAll({
    where: {
      isPast: false,
    },
    include: [
      {
        model: Fight, // include the fights
        include: [Fighter], // include the fighters
      },
    ],
  });
  res.json(events);
});

// READ
// GET one event
router.get('/:id', async (req, res) => {
  //get the event from db by id
  const e = await Event.findByPk(req.params.id, {
    include: [
      {
        model: Fight, // include the fights
        include: [Fighter], // include the fighters
      },
    ],
  });
  res.json(e);
});

// CREATE
// POST new event
// unused for now
// router.post('/', (req, res) => {
//   const { name, date, location, time } = req.body;
//   Event.create({ name, date, location, time })
//     .then((event) => {
//       res.json(event);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// UPDATE
// POST update event
//unused for now
// router.post('/:id', (req, res) => {
//   const { name, date, location, time } = req.body;
//   Event.update({ name, date, location, time }, { where: { id: req.params.id } })
//     .then((event) => {
//       res.json(event);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// DELETE
// DELETE event
// unused for now
// router.delete('/:id', async (req, res) => {
//   await Event.destroy({ where: { id: req.params.id } })
//     .then((event) => {
//       res.json('event deleted: ' + req.params.id);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = router;
