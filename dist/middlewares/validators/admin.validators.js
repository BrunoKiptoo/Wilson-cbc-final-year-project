"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminUpdateValidator = exports.adminLoginValidator = exports.adminRegisterValidator = void 0;
const express_validator_1 = require("express-validator");
exports.adminRegisterValidator = [
    (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
    (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];
exports.adminLoginValidator = [
    (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required')
];
exports.adminUpdateValidator = [
    (0, express_validator_1.body)('username').optional().notEmpty().withMessage('Username cannot be empty'),
    (0, express_validator_1.body)('password').optional().notEmpty().withMessage('Password cannot be empty').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];
//# sourceMappingURL=admin.validators.js.map