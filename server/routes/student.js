var express = require("express");
var router = express.Router();
var upload = require("../utilities/upload");
var middle = [upload.single("image")];
var studentController = require("../controllers/studentController");

router.get("/stud", async function (req, res, next) {
  let stud = await studentController.getListStudent();
  res.json(stud);
});

/* GET home page. */
router.get("/", async function (req, res, next) {
  let list = await studentController.getListStudent();
  res.render("student", { listTable: list, title: "Students List" });
});

// GET ADD-STUDENT và truyền loại product lên form
router.get("/add-student", function (req, res, next) {
  res.render("add-student", { title: "Form adding" });
});

// Thêm Student
router.post("/add-student", middle, async function (req, res, next) {
  let { body } = req;
  if (req.file) {
    let imgUrl = req.file.originalname;
    body = { ...body, image: imgUrl };
  }
  await studentController.addNew(body, res);
  res.redirect("/student");
});

// Delete Student
router.delete("/delete/:id", async function (req, res, next) {
  let id = req.params.id;
  await studentController.remove(id);
  res.send({ res: true });
});

// GET Data từ Table lên Form Edit (Student)
router.get("/edit-student/:id", async function (req, res, next) {
  let id = req.params.id;
  let stud = await studentController.getStudentById(id);
  res.render("edit-student", {
    studGetData: stud,
    title: "Edit Student",
  });
});

// Hàm chỉnh sửa Student
router.post("/edit-student/:id", middle, async function (req, res, next) {
  let { id } = req.params;
  let { body } = req;
  if (req.file) {
    let imgUrl = req.file.originalname;
    body = { ...body, image: imgUrl };
  }
  await studentController.edit(id, body);
  res.redirect("/student");
});

module.exports = router;
