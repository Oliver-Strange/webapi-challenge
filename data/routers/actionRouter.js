const express = require("express");

const ActionDb = require("../helpers/actionModel");

const router = express.Router();

// GET actions
router.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sever error" });
  }
});

// GET actions by Id
router.get("/:id", async (req, res) => {
  try {
    const actions = await ActionDb.get(req.query);
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sever error retrieving actions" });
  }
});

// POST action
// found in projectRouter

// PUT action
router.put("/:id", async (req, res) => {
  try {
    const action = await ActionDb.update(req.params.id, req.body);
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: "Action could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sever error updating action" });
  }
});

// DELETE action
router.delete("/:id", async (req, res) => {
  try {
    const count = await ActionDb.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "Action Deleted" });
    } else {
      res.status(404).json({ message: "Action could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sever error deleting action" });
  }
});

module.exports = router;
