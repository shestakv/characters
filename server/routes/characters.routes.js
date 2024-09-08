const router = require("express").Router();
const CharacterServices = require("../services/CharacterServices");

router.get("/", async (req, res) => {
  try {
    const characters = await CharacterServices.getAllCards();
    res.status(200).json({ message: "success", characters });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// параметризированный запрос
router.get("/:idOrName", async (req, res) => {
  try {
    const { idOrName } = req.params;
    let character;
    if (Number(idOrName)) {
      character = await CharacterServices.getCardById(idOrName);
      if (character) {
        res.status(200).json({ message: "success", character });
        return;
      }
    }
    if (typeof idOrName === "string") {
      character = await CharacterServices.getCardByName(idOrName);
      if (character) {
        res.status(200).json({ message: "success", character });
        return;
      }
    }
    res.status(400).json({ message: "character is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { userId, universeId, title, image, info, rare, price } = req.body;
    let character = await CharacterServices.getCardByName(name);
    if (!character) {
      character = await CharacterServices.addCard({
        userId,
        universeId,
        title,
        image,
        info,
        rare,
        price,
      });
      res.status(200).json({ message: "success", character });
      return;
    }
    res.status(400).json({ message: "character already exists" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// параметризированный запрос
router.put("/:id", async (req, res) => {
  try {
    const { name, rare } = req.body;
    const { id } = req.params;
    let character = await CharacterServices.getCardById(id);
    if (character) {
      character = await CharacterServices.updateCard({ rare, name });
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "character is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// параметризированный запрос
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let character = await CharacterServices.getCardById(id);
    if (character) {
      character = await CharacterServices.deleteCard(id);
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "character is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
