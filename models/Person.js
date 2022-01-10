const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// mongoose.Schema , mongoose.model
const personSchema = new Schema({
    name: { type: String, required: true },
    email: String,
    age: Number,
});

module.exports = Person = model("Person", personSchema);
