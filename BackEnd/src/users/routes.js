const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", controller.getAllUsers);
router.post("/", controller.signUpUser);
router.post("/login", controller.signInUser);

module.exports = router;
