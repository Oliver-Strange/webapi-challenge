const express = require("express");

const ProjectDb = require("../helpers/projectModel");
const ActionDb = require("../helpers/actionModel");

const router = express.Router();

// GET projects
router.get("/", async (req, res) => {
  try {
    const projects = await ProjectDb.get(req.query);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error retrieving projects" });
  }
});

// GET projects by Id
router.get("/:id", async (req, res) => {
  try {
    const project = await ProjectDb.get(req.params.id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error retrieving project" });
  }
});

// POST project
router.post("/", async (req, res) => {
  try {
    const project = await ProjectDb.insert(req.body);
    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error adding project" });
  }
});

// PUT project
router.put("/:id", async (req, res) => {
  try {
    const project = await ProjectDb.update(req.params.id, req.body);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Project could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server failed to update project" });
  }
});

// DELETE project
router.delete("/:id", async (req, res) => {
  try {
    const count = await ProjectDb.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "Project has been deleted" });
    } else {
      res.status(404).json({ message: "Project could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error deleting project" });
  }
});

module.exports = router;
