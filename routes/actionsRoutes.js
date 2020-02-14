const express = require("express");
const router = express.Router();
const db = require("../data/helpers/actionModel");

router.get("/", (req, res) => {
  db.get()
    .then(actions =>
      !actions.length ? res.status(404) : res.status(200).json(actions)
    )
    .catch(err =>
      res
        .send(500)
        .json({ errorMessage: "unable to retrieve actions", error: err })
    );
});

router.get("/:id", (req, res) => {
  db.get(req.params.id)
    .then(action =>
      !action
        ? res.status(404).send("action not found")
        : res.status(200).json(action)
    )
    .catch(err =>
      res
        .send(500)
        .json({ errorMessage: "unable to retrieve action", error: err })
    );
});

router.post("/", (req, res) => {
  db.get(req.body)
    .then(action => res.status(200).json(action))
    .catch(err =>
      res
        .send(500)
        .json({ errorMessage: "unable to create action", error: err })
    );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;
  db.update(id, update)
    .then(action => res.status(200).json(action))
    .catch(err =>
      res
        .send(500)
        .json({ errorMessage: "unable to update action", error: err })
    );
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(records =>
      res
        .status(200)
        .json({ message: `successfully deleted ${records} records` })
    )
    .catch(err =>
      res
        .send(500)
        .json({ errorMessage: "unable to remove action", error: err })
    );
});

router.use("/", (req, res) => {
  res.status(200).send("action router working");
});

module.exports = router;
