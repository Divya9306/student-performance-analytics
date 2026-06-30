const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

router.get("/", studentController.getStudents);
router.post("/", studentController.addStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);
router.get("/search", studentController.searchStudents);
router.get("/:id", studentController.getStudentById);
router.get("/page/list", studentController.getStudentsPaginated);

module.exports = router;


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

