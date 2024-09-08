const router = require("express").Router();
const UserServices = require("../services/UserServices");

// READ
router.get("/", async (req, res) => {
  try {
    const users = await UserServices.getAllUsers();
    res.status(200).json({ message: "success", users });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// параметризированный запрос
router.get("/:idOrName", async (req, res) => {
  try {
    const { idOrName } = req.params;
    let user;
    if (Number(idOrName)) {
      user = await UserServices.getUserById(idOrName);
      if (user) {
        res.status(200).json({ message: "success", user });
        return;
      }
    }
    if (typeof idOrName === "string") {
      user = await UserServices.getUsersByName(idOrName);
      if (user) {
        res.status(200).json({ message: "success", user });
        return;
      }
    }
    res.status(400).json({ message: "user is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// CREATE
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const user = await UserServices.createUser({
      title,
      description,
    });
    if (user) {
      res.status(201).json({ message: "success", user });
      return;
    }
    res.status(400).json({ message: "user already exists" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// // UPDATE
// // параметризированный запрос
// router.put("/:title", async (req, res) => {
//   try {
//     const { newTitle, newDescription } = req.body;
//     const { title } = req.params;
//     let user = await UserServices.getUserByTitle(title);
//     if (user) {
//       user = await UserServices.updateUserByTitle({
//         title,
//         newTitle,
//         newDescription,
//       });
//       res.status(200).json({ message: "success", user });
//       return;
//     }
//     res.status(400).json({ message: "user is not found" });
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

// DELETE
// параметризированный запрос
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let user = await UserServices.getUserById(id);
    if (user) {
      user = await UserServices.deleteUser(id);
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "user is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
