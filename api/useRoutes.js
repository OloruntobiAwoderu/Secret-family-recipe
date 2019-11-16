const express = require("express");
const users = require("../data/helpers/usersModel");
const router = express.Router();

router.get("/", (req, res) => {
  users
    .find()
    .then(user => {
      res.status(200).json({ user });
    })
    .catch(() => {
      res.status(500).json({
        error: "Internal server error"
      });
    });
});

module.exports = router;