const router = require("express").Router();
const universeRouter = require("./universes.routes");
const userRouter = require("./users.routes");
const characterRouter = require("./characters.routes");
const errorRouter = require("./error.routes");

router.use("/universes", universeRouter);
router.use("/users", userRouter);
router.use("/characters", characterRouter);
router.use("*", errorRouter);

module.exports = router;
