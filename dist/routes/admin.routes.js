"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_contoller_1 = require("../controllers/admin.contoller");
const admin_validators_1 = require("../middlewares/validators/admin.validators");
const validate_request_1 = require("../middlewares/validate-request");
const router = express_1.default.Router();
router.post("/register", admin_validators_1.adminRegisterValidator, validate_request_1.validate, admin_contoller_1.adminRegister);
router.post("/login", admin_validators_1.adminLoginValidator, validate_request_1.validate, admin_contoller_1.adminLogin);
router.post("/logout", admin_contoller_1.adminLogout);
router.get("/all", admin_contoller_1.getAllAdmins);
router.get("/single/:id", admin_contoller_1.getAdminById);
router.put("/single/:id", admin_validators_1.adminUpdateValidator, admin_contoller_1.updateAdmin);
router.delete("/single/:id", admin_contoller_1.deleteAdmin);
router.delete("/all", admin_contoller_1.deleteAllAdmins);
router.get("/search", admin_contoller_1.searchAdmins);
exports.default = router;
//# sourceMappingURL=admin.routes.js.map