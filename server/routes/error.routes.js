const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(404).json(404);
});

module.exports = router;
