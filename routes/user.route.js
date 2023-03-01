const router = require("express").Router();
const verify = require("./verifyToken");

//Update user

router.put("/:id", verify, async (req, res) => {});

module.exports = router;
