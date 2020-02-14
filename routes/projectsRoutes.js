const express = require("express");
const router = express.Router();
const db = require("../data/helpers/projectModel");

router.get("/", (req, res) => {
  db.get()
    .then(projects =>
      !projects.length ? res.status(404) : res.status(200).json(projects)
    )
    .catch(err =>
      res
        .send(500)
        .json({ errorMessage: "unable to retrieve projects", error: err })
    );
});

router.get("/:id", (req, res) => {
  db.get(req.params.id)
    .then(project =>
      !project
        ? res.status(404).send("project not found")
        : res.status(200).json(project)
    )
    .catch(err =>
      res
        .send(500)
        .json({ errorMessage: "unable to retrieve project", error: err })
    );
});

router.post("/", (req, res) => {
  db.insert(req.body)
    .then(project => res.status(200).json(project))
    .catch(err =>
      res
        .send(500)
        .json({ errorMessage: "unable to create project", error: err })
    );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;
  db.update(id, update)
    .then(project => res.status(200).json(project))
    .catch(err =>
      res
        .send(500)
        .json({ errorMessage: "unable to update project", error: err })
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
        .json({ errorMessage: "unable to remove project", error: err })
    );
});

router.get("/:id/actions", (req, res) => {
  db.getProjectActions(req.params.id)
    .then(project =>
      !project.length
        ? res.status(404).send("no actions found for project")
        : res.status(200).json(project)
    )
    .catch(err =>
      res.status(500).json({
        errorMessage: "unable to retrieve project actions",
        error: err
      })
    );
});

router.use("/", (req, res) => {
  res.status(200).send("project router working");
});

module.exports = router;
