const express = require("express");
const router = express.Router();
const person = require("../models/Person");
// CRUD operations
// post
//get
// put
// delete

// add person
router.post("/add", async (req, res) => {
    try {
        const newPerson = new person({ ...req.body });
        await newPerson.save();
        res.status(200).send({ message: "person added succ", newPerson });
    } catch (err) {
        res.status(500).send(err);
    }
});

// get people
router.get("/people", async (req, res) => {
    try {
        const people = await person.find();
        res.status(200).send({ message: "get people", people });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
