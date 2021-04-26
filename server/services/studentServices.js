const studentModel = require("../models/studentModel");

exports.getListStudent = async function getListStudent() {
  let stud = await studentModel.find();
  return stud;
};

exports.getStudentById = async function getStudentById(id) {
  let stud = await studentModel.findById(id);
  return stud;
};

exports.addNew = async function addNewStudent(id, res) {
  let stud = new studentModel(id)
  return await stud.save();
};

exports.edit = async function editStudent(stud) {
  let studEdit = await studentModel.findById(stud.id)
  // console.log(studEdit);
  if(studEdit){
    studEdit.name = stud.name;
    if (stud.image) {
      studEdit.image = stud.image;
    }
    studEdit.salary = stud.salary;
  }
  return await studEdit.save();
};

exports.remove = async function removeStudentById(id) {
  let removeProd = await studentModel.findByIdAndRemove(id)
  return await removeProd;
};