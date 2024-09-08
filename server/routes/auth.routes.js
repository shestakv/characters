const router = require("express").Router();
const UserServices = require("../services/UserServices");
const bcrypt = require("bcrypt");

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await UserServices.getUsersByName(name);
    if (!user) {
      user = await UserServices.addUser({
        name,
        email,
        password: await bcrypt.hash(password, 8),
      });
      res.status(201).json({ message: "success", user });
      return;
    }
    res.status(400).json({ message: "user already exists" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserServices.getUsersByEmail(email);
    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        res.status(200).json({ message: "entry completed" });
        return;
      }
    }
    res.status(400).json({ message: "email or password is incorrect" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
