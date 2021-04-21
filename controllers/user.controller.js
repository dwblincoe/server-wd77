const express = require("express");
const router = express.Router();
// Version 5 sequelize model import
// const User = require("../db").import("../models/user");

// Version 6 sequelize model import
const User = require("../models/users");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();

    res.send({ users });
  } catch (error) {
    res.status(500).send({ error });
  }
  User.findAll();
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  User.findOne({ where: { id } })
    .then((user) => {
      if (user) {
        res.send({ user });
      } else {
        res.send({ message: `No user exists with Id ${id}` });
      }
    })
    .catch((error) => res.status(500).send({ error }));
});

router.post("/create", (req, res) => {
  const { email, password } = req.body;

  User.create({
    email,
    password,
  })
    .then((user) => res.send({ user }))
    .catch((error) =>
      res
        .status(500)
        .send({ message: "User not created", error: error.errors[0].message })
    );
});

module.exports = router;
