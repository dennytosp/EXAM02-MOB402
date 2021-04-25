const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const studentSchema = new Schema({
  id: { type: ObjectId },
  name: { type: String},
  image: { type: String, required: true },
  salary: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentSchema);
