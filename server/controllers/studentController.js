var studentServices = require("../services/studentServices");

exports.getListStudent = async function getListStudent() {
  return await studentServices.getListStudent();
};

exports.getStudentById = async function getStudentById(id) {
  return await studentServices.getStudentById(id);
};

exports.addNew = async function addNewStudent(params) {
  let { name, image, salary } = params;
  let stud = {
    name: name,
    image: image,
    salary: salary,
  };

  // Tạo mới một sản phẩm
  return await studentServices.addNew(stud);
};

exports.edit = async function editStudent(id, params) {
    let { name, image, salary } = params;
    let stud = {
    id,
    name,
    image,
    salary,
  };
  await studentServices.edit(stud);
};

exports.remove = async function removeStudentById(id) {
  await studentServices.remove(id);
};