import express from 'express';
import { adminLogin, adminRegister, deleteAdmin, deleteAllAdmins, getAdminById, getAllAdmins, searchAdmins, updateAdmin } from '../controllers/admin.contoller';
import { adminLoginValidator, adminRegisterValidator, adminUpdateValidator } from '../middlewares/validators/admin.validators';
import { validate } from '../middlewares/validate-request';

const router = express.Router();

router.post('/register', adminRegisterValidator, validate, adminRegister);
router.post('/login', adminLoginValidator, validate, adminLogin);
router.get('/all', getAllAdmins);
router.get('/single/:id', getAdminById);
router.put('/single/:id', adminUpdateValidator, updateAdmin);
router.delete('/single/:id', deleteAdmin);
router.delete('/all', deleteAllAdmins);
router.get('/search', searchAdmins);


export default router;
