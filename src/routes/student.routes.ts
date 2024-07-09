import express from 'express';
import { validate } from "../middlewares/validate-request";
import { createStudentValidator, deleteStudentValidator, updateStudentValidator } from '../middlewares/validators/student.validators';
import { addStudent, deleteAllStudents, deleteStudent, getStudentById, getStudents, searchStudents, updateStudent } from '../controllers/student.controller';

const router = express.Router();

router.post('/new', createStudentValidator, validate, addStudent);
router.get('/all', getStudents);
router.get('/single/:id', getStudentById);
router.put('/single/:id', updateStudentValidator, validate, updateStudent);
router.delete('/single/:id', deleteStudentValidator, validate, deleteStudent);
router.delete('/all_students',deleteAllStudents);
router.get('/search', searchStudents);
//

export default router;
