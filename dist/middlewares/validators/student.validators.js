"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudentValidator = exports.getStudentValidator = exports.updateStudentValidator = exports.createStudentValidator = void 0;
const express_validator_1 = require("express-validator");
exports.createStudentValidator = [
    (0, express_validator_1.check)('firstName').notEmpty().withMessage('First name is required'),
    (0, express_validator_1.check)('lastName').notEmpty().withMessage('Last name is required'),
    (0, express_validator_1.check)('grade').notEmpty().withMessage('Grade is required'),
    (0, express_validator_1.check)('classTeacher').notEmpty().withMessage('Class teacher is required'),
    (0, express_validator_1.check)('assessments').optional().notEmpty().isArray().withMessage('Assessments should be an array'),
    (0, express_validator_1.check)('assessments.*.formative').optional().notEmpty().withMessage('Formative assessment is required'),
    (0, express_validator_1.check)('assessments.*.summative').optional().notEmpty().withMessage('Summative assessment is required'),
    (0, express_validator_1.check)('competencies.communicationAndCollaboration.score').optional().isInt({ min: 0, max: 100 }).withMessage('Communication and Collaboration score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.communicationAndCollaboration.teacher').optional().notEmpty().withMessage('Communication and Collaboration teacher is required'),
    (0, express_validator_1.check)('competencies.criticalThinkingAndProblemSolving.score').optional().isInt({ min: 0, max: 100 }).withMessage('Critical Thinking and Problem Solving score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.criticalThinkingAndProblemSolving.teacher').optional().notEmpty().withMessage('Critical Thinking and Problem Solving teacher is required'),
    (0, express_validator_1.check)('competencies.imaginationAndCreativity.score').optional().isInt({ min: 0, max: 100 }).withMessage('Imagination and Creativity score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.imaginationAndCreativity.teacher').optional().notEmpty().withMessage('Imagination and Creativity teacher is required'),
    (0, express_validator_1.check)('competencies.citizenship.score').optional().isInt({ min: 0, max: 100 }).withMessage('Citizenship score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.citizenship.teacher').optional().notEmpty().withMessage('Citizenship teacher is required'),
    (0, express_validator_1.check)('competencies.learningToLearn.score').optional().isInt({ min: 0, max: 100 }).withMessage('Learning to Learn score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.learningToLearn.teacher').optional().notEmpty().withMessage('Learning to Learn teacher is required'),
    (0, express_validator_1.check)('competencies.selfEfficacy.score').optional().isInt({ min: 0, max: 100 }).withMessage('Self-Efficacy score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.selfEfficacy.teacher').optional().notEmpty().withMessage('Self-Efficacy teacher is required'),
    (0, express_validator_1.check)('competencies.digitalLiteracy.score').optional().isInt({ min: 0, max: 100 }).withMessage('Digital Literacy score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.digitalLiteracy.teacher').optional().notEmpty().withMessage('Digital Literacy teacher is required'),
    (0, express_validator_1.check)('parents').optional().isArray().withMessage('Parents should be an array'),
    (0, express_validator_1.check)('parents.*.name').optional().notEmpty().withMessage('Parent name cannot be empty'),
    (0, express_validator_1.check)('parents.*.phoneNumber').optional().notEmpty().withMessage('Parent phone number cannot be empty')
];
exports.updateStudentValidator = [
    (0, express_validator_1.check)('firstName').optional().notEmpty().withMessage('First name cannot be empty'),
    (0, express_validator_1.check)('lastName').optional().notEmpty().withMessage('Last name cannot be empty'),
    (0, express_validator_1.check)('grade').optional().notEmpty().withMessage('Grade cannot be empty'),
    (0, express_validator_1.check)('classTeacher').optional().notEmpty().withMessage('Class teacher cannot be empty'),
    (0, express_validator_1.check)('assessments').optional().isArray().withMessage('Assessments should be an array'),
    (0, express_validator_1.check)('assessments.*.formative').optional().notEmpty().withMessage('Formative assessment cannot be empty'),
    (0, express_validator_1.check)('assessments.*.summative').optional().notEmpty().withMessage('Summative assessment cannot be empty'),
    (0, express_validator_1.check)('competencies.communicationAndCollaboration.score').optional().isInt({ min: 0, max: 100 }).withMessage('Communication and Collaboration score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.communicationAndCollaboration.teacher').optional().notEmpty().withMessage('Communication and Collaboration teacher is required'),
    (0, express_validator_1.check)('competencies.criticalThinkingAndProblemSolving.score').optional().isInt({ min: 0, max: 100 }).withMessage('Critical Thinking and Problem Solving score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.criticalThinkingAndProblemSolving.teacher').optional().notEmpty().withMessage('Critical Thinking and Problem Solving teacher is required'),
    (0, express_validator_1.check)('competencies.imaginationAndCreativity.score').optional().isInt({ min: 0, max: 100 }).withMessage('Imagination and Creativity score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.imaginationAndCreativity.teacher').optional().notEmpty().withMessage('Imagination and Creativity teacher is required'),
    (0, express_validator_1.check)('competencies.citizenship.score').optional().isInt({ min: 0, max: 100 }).withMessage('Citizenship score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.citizenship.teacher').optional().notEmpty().withMessage('Citizenship teacher is required'),
    (0, express_validator_1.check)('competencies.learningToLearn.score').optional().isInt({ min: 0, max: 100 }).withMessage('Learning to Learn score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.learningToLearn.teacher').optional().notEmpty().withMessage('Learning to Learn teacher is required'),
    (0, express_validator_1.check)('competencies.selfEfficacy.score').optional().isInt({ min: 0, max: 100 }).withMessage('Self-Efficacy score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.selfEfficacy.teacher').optional().notEmpty().withMessage('Self-Efficacy teacher is required'),
    (0, express_validator_1.check)('competencies.digitalLiteracy.score').optional().isInt({ min: 0, max: 100 }).withMessage('Digital Literacy score must be between 0 and 100'),
    (0, express_validator_1.check)('competencies.digitalLiteracy.teacher').optional().notEmpty().withMessage('Digital Literacy teacher is required'),
    (0, express_validator_1.check)('parents').optional().isArray().withMessage('Parents should be an array'),
    (0, express_validator_1.check)('parents.*.name').optional().notEmpty().withMessage('Parent name cannot be empty'),
    (0, express_validator_1.check)('parents.*.phoneNumber').optional().notEmpty().withMessage('Parent phone number cannot be empty')
];
exports.getStudentValidator = [
    (0, express_validator_1.check)('id').isMongoId().withMessage('Invalid student ID')
];
exports.deleteStudentValidator = [
    (0, express_validator_1.check)('id').isMongoId().withMessage('Invalid student ID')
];
//# sourceMappingURL=student.validators.js.map