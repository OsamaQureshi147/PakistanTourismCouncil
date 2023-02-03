const { Router } = require("express");
const userController = require("../../../Controllers/users");

const router = Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.addNewUser);

module.exports = router;
