import { check } from 'express-validator';

export const createStudentValidator = [
    check('firstName').notEmpty().withMessage('First name is required'),
    check('lastName').notEmpty().withMessage('Last name is required'),
    check('grade').notEmpty().withMessage('Grade is required'),
    check('classTeacher').notEmpty().withMessage('Class teacher is required'),
    check('assessments').optional().notEmpty().isArray().withMessage('Assessments should be an array'),
    check('assessments.*.formative').optional().notEmpty().withMessage('Formative assessment is required'),
    check('assessments.*.summative').optional().notEmpty().withMessage('Summative assessment is required'),
    check('competencies.communicationAndCollaboration.score').optional().isInt({ min: 0, max: 100 }).withMessage('Communication and Collaboration score must be between 0 and 100'),
    check('competencies.communicationAndCollaboration.teacher').optional().notEmpty().withMessage('Communication and Collaboration teacher is required'),
    check('competencies.criticalThinkingAndProblemSolving.score').optional().isInt({ min: 0, max: 100 }).withMessage('Critical Thinking and Problem Solving score must be between 0 and 100'),
    check('competencies.criticalThinkingAndProblemSolving.teacher').optional().notEmpty().withMessage('Critical Thinking and Problem Solving teacher is required'),
    check('competencies.imaginationAndCreativity.score').optional().isInt({ min: 0, max: 100 }).withMessage('Imagination and Creativity score must be between 0 and 100'),
    check('competencies.imaginationAndCreativity.teacher').optional().notEmpty().withMessage('Imagination and Creativity teacher is required'),
    check('competencies.citizenship.score').optional().isInt({ min: 0, max: 100 }).withMessage('Citizenship score must be between 0 and 100'),
    check('competencies.citizenship.teacher').optional().notEmpty().withMessage('Citizenship teacher is required'),
    check('competencies.learningToLearn.score').optional().isInt({ min: 0, max: 100 }).withMessage('Learning to Learn score must be between 0 and 100'),
    check('competencies.learningToLearn.teacher').optional().notEmpty().withMessage('Learning to Learn teacher is required'),
    check('competencies.selfEfficacy.score').optional().isInt({ min: 0, max: 100 }).withMessage('Self-Efficacy score must be between 0 and 100'),
    check('competencies.selfEfficacy.teacher').optional().notEmpty().withMessage('Self-Efficacy teacher is required'),
    check('competencies.digitalLiteracy.score').optional().isInt({ min: 0, max: 100 }).withMessage('Digital Literacy score must be between 0 and 100'),
    check('competencies.digitalLiteracy.teacher').optional().notEmpty().withMessage('Digital Literacy teacher is required'),
    check('parents').optional().isArray().withMessage('Parents should be an array'),
    check('parents.*.name').optional().notEmpty().withMessage('Parent name cannot be empty'),
    check('parents.*.phoneNumber').optional().notEmpty().withMessage('Parent phone number cannot be empty')
];


export const updateStudentValidator = [
    check('firstName').optional().notEmpty().withMessage('First name cannot be empty'),
    check('lastName').optional().notEmpty().withMessage('Last name cannot be empty'),
    check('grade').optional().notEmpty().withMessage('Grade cannot be empty'),
    check('classTeacher').optional().notEmpty().withMessage('Class teacher cannot be empty'),
    check('assessments').optional().isArray().withMessage('Assessments should be an array'),
    check('assessments.*.formative').optional().notEmpty().withMessage('Formative assessment cannot be empty'),
    check('assessments.*.summative').optional().notEmpty().withMessage('Summative assessment cannot be empty'),
    check('competencies.communicationAndCollaboration.score').optional().isInt({ min: 0, max: 100 }).withMessage('Communication and Collaboration score must be between 0 and 100'),
    check('competencies.communicationAndCollaboration.teacher').optional().notEmpty().withMessage('Communication and Collaboration teacher is required'),
    check('competencies.criticalThinkingAndProblemSolving.score').optional().isInt({ min: 0, max: 100 }).withMessage('Critical Thinking and Problem Solving score must be between 0 and 100'),
    check('competencies.criticalThinkingAndProblemSolving.teacher').optional().notEmpty().withMessage('Critical Thinking and Problem Solving teacher is required'),
    check('competencies.imaginationAndCreativity.score').optional().isInt({ min: 0, max: 100 }).withMessage('Imagination and Creativity score must be between 0 and 100'),
    check('competencies.imaginationAndCreativity.teacher').optional().notEmpty().withMessage('Imagination and Creativity teacher is required'),
    check('competencies.citizenship.score').optional().isInt({ min: 0, max: 100 }).withMessage('Citizenship score must be between 0 and 100'),
    check('competencies.citizenship.teacher').optional().notEmpty().withMessage('Citizenship teacher is required'),
    check('competencies.learningToLearn.score').optional().isInt({ min: 0, max: 100 }).withMessage('Learning to Learn score must be between 0 and 100'),
    check('competencies.learningToLearn.teacher').optional().notEmpty().withMessage('Learning to Learn teacher is required'),
    check('competencies.selfEfficacy.score').optional().isInt({ min: 0, max: 100 }).withMessage('Self-Efficacy score must be between 0 and 100'),
    check('competencies.selfEfficacy.teacher').optional().notEmpty().withMessage('Self-Efficacy teacher is required'),
    check('competencies.digitalLiteracy.score').optional().isInt({ min: 0, max: 100 }).withMessage('Digital Literacy score must be between 0 and 100'),
    check('competencies.digitalLiteracy.teacher').optional().notEmpty().withMessage('Digital Literacy teacher is required'),
    check('parents').optional().isArray().withMessage('Parents should be an array'),
    check('parents.*.name').optional().notEmpty().withMessage('Parent name cannot be empty'),
    check('parents.*.phoneNumber').optional().notEmpty().withMessage('Parent phone number cannot be empty')
];


export const getStudentValidator = [
    check('id').isMongoId().withMessage('Invalid student ID')
];

export const deleteStudentValidator = [
    check('id').isMongoId().withMessage('Invalid student ID')
];
