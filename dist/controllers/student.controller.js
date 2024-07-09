"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchStudents = exports.deleteAllStudents = exports.getStudentById = exports.deleteStudent = exports.updateStudent = exports.getStudents = exports.addStudent = void 0;
const express_validator_1 = require("express-validator");
const student_1 = __importDefault(require("../models/student"));
const logger_1 = __importDefault(require("../utils/logger"));
const addStudent = async (req, res) => {
    const { firstName, lastName } = req.body;
    try {
        // Check if a student with the same firstName and lastName already exists
        const existingStudent = await student_1.default.findOne({ firstName, lastName });
        if (existingStudent) {
            return res.status(400).json({ error: true, message: 'Student with this first name and last name already exists', data: null });
        }
        // Create a new student
        const newStudent = new student_1.default(req.body);
        const savedStudent = await newStudent.save();
        return res.status(201).json({ error: false, message: 'Student created successfully', data: savedStudent });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error creating student', data: null });
    }
};
exports.addStudent = addStudent;
const getStudents = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    try {
        const skip = (page - 1) * limit;
        const students = await student_1.default.find()
            .skip(skip)
            .limit(limit)
            .exec();
        const totalStudents = await student_1.default.countDocuments();
        if (!students || students.length === 0) {
            return res.status(404).json({ error: true, message: 'No students found', data: null });
        }
        return res.status(200).json({
            error: false,
            message: 'Students retrieved successfully',
            data: {
                students,
                totalPages: Math.ceil(totalStudents / limit),
                currentPage: page,
                totalStudents
            }
        });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error retrieving students', data: null });
    }
};
exports.getStudents = getStudents;
const updateStudent = async (req, res) => {
    try {
        const data = (0, express_validator_1.matchedData)(req);
        const student = await student_1.default.findByIdAndUpdate(req.params.id, data, { new: true });
        if (!student) {
            return res.status(404).json({ error: true, message: "Student not found", data: null });
        }
        return res.status(200).json({ message: "Student updated successfully", data: student });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: error.message || "Error updating student", data: null });
    }
};
exports.updateStudent = updateStudent;
const deleteStudent = async (req, res) => {
    try {
        const student = await student_1.default.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ error: true, message: "Student not found", data: null });
        }
        return res.status(200).json({ message: "Student deleted successfully", data: student });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: error.message || "Error deleting student", data: null });
    }
};
exports.deleteStudent = deleteStudent;
const getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await student_1.default.findById(id);
        if (!student) {
            return res.status(404).json({ error: true, message: 'Student not found', data: null });
        }
        return res.status(200).json({ error: false, message: 'Student retrieved successfully', data: student });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error retrieving student', data: null });
    }
};
exports.getStudentById = getStudentById;
const deleteAllStudents = async (req, res) => {
    console.log(req);
    try {
        const deleteResult = await student_1.default.deleteMany({});
        if (!deleteResult) {
            return res.status(404).json({ error: true, message: 'No students found to delete', data: null });
        }
        return res.status(200).json({ error: false, message: 'All students deleted successfully', data: null });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error deleting students', data: null });
    }
};
exports.deleteAllStudents = deleteAllStudents;
const searchStudents = async (req, res) => {
    const query = req.query;
    try {
        const students = await student_1.default.find(query);
        if (!students || students.length === 0) {
            return res.status(404).json({ error: true, message: 'No students found', data: null });
        }
        return res.status(200).json({ error: false, message: 'Students retrieved successfully', data: students });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error retrieving students', data: null });
    }
};
exports.searchStudents = searchStudents;
//# sourceMappingURL=student.controller.js.map