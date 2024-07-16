import { body } from 'express-validator';

export const adminRegisterValidator = [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

export const adminLoginValidator = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
];

export const adminUpdateValidator = [
    body('username').optional().notEmpty().withMessage('Username cannot be empty'),
    body('password').optional().notEmpty().withMessage('Password cannot be empty').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];