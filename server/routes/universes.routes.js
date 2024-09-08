const router = require("express").Router();
const UniverseServices = require("../services/UniverseServices");

// READ
router.get("/", async (req, res) => {
  try {
    const universes = await UniverseServices.getAllUniverses();
    res.status(200).json({ message: "success", universes });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// параметризированный запрос
router.get("/:idOrName", async (req, res) => {
  try {
    const { idOrName } = req.params;
    let universe;
    if (Number(idOrName)) {
      universe = await UniverseServices.getUniverseById(idOrName);
      if (universe) {
        res.status(200).json({ message: "success", universe });
        return;
      }
    }
    if (typeof idOrName === "string") {
      universe = await UniverseServices.getUniverseByTitle(idOrName);
      if (universe) {
        res.status(200).json({ message: "success", universe });
        return;
      }
    }
    res.status(400).json({ message: "universe is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// CREATE
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const universe = await UniverseServices.createUniverse({
      title,
      description,
    });
    if (universe) {
      res.status(201).json({ message: "success", universe });
      return;
    }
    res.status(400).json({ message: "universe already exists" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// UPDATE
// параметризированный запрос
router.put("/:title", async (req, res) => {
  try {
    const { newTitle, newDescription } = req.body;
    const { title } = req.params;
    let universe = await UniverseServices.getUniverseByTitle(title);
    if (universe) {
      universe = await UniverseServices.updateUniverseByTitle({
        title,
        newTitle,
        newDescription,
      });
      res.status(200).json({ message: "success", universe });
      return;
    }
    res.status(400).json({ message: "universe is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// DELETE
// параметризированный запрос
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let universe = await UniverseServices.getUniverseById(id);
    if (universe) {
      universe = await UniverseServices.deleteUniverse(id);
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "universe is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
