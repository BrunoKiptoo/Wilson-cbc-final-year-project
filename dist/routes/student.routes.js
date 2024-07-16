"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_request_1 = require("../middlewares/validate-request");
const student_validators_1 = require("../middlewares/validators/student.validators");
const student_controller_1 = require("../controllers/student.controller");
const router = express_1.default.Router();
router.post("/new", student_validators_1.createStudentValidator, validate_request_1.validate, student_controller_1.addStudent);
router.get("/all", student_controller_1.getStudents);
router.get("/single/:id", student_controller_1.getStudentById);
router.put("/single/:id", student_validators_1.updateStudentValidator, validate_request_1.validate, student_controller_1.updateStudent);
router.delete("/single/:id", student_validators_1.deleteStudentValidator, validate_request_1.validate, student_controller_1.deleteStudent);
router.delete("/all_students", student_controller_1.deleteAllStudents);
router.get("/search", student_controller_1.searchStudents);
//
exports.default = router;
//# sourceMappingURL=student.routes.js.map