import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import Student from '../models/student';
import Logger from '../utils/logger';

export const addStudent = async (req: Request, res: Response) => {
    const { firstName, lastName } = req.body;

    try {
        // Check if a student with the same firstName and lastName already exists
        const existingStudent = await Student.findOne({ firstName, lastName });

        if (existingStudent) {
            return res.status(400).json({ error: true, message: 'Student with this first name and last name already exists', data: null });
        }

        // Create a new student
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();

        return res.status(201).json({ error: false, message: 'Student created successfully', data: savedStudent });
    } catch (error) {
        Logger.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error creating student', data: null });
    }
};

export const getStudents = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    try {
        const skip = (page - 1) * limit;

        const students = await Student.find()
            .skip(skip)
            .limit(limit)
            .exec();

        const totalStudents = await Student.countDocuments();

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
    } catch (error) {
        Logger.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error retrieving students', data: null });
    }
};

export const updateStudent = async (req: Request, res: Response) => {
    try {
        const data = matchedData(req);
        const student = await Student.findByIdAndUpdate(req.params.id, data, { new: true });
        if (!student) {
            return res.status(404).json({ error: true, message: "Student not found", data: null });
        }
        return res.status(200).json({ message: "Student updated successfully", data: student });
    } catch (error) {
        Logger.error(error);
        return res.status(500).json({ error: true, message: error.message || "Error updating student", data: null });
    }
};

export const deleteStudent = async (req: Request, res: Response) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ error: true, message: "Student not found", data: null });
        }
        return res.status(200).json({ message: "Student deleted successfully", data: student });
    } catch (error) {
        Logger.error(error);
        return res.status(500).json({ error: true, message: error.message || "Error deleting student", data: null });
    }
};

export const getStudentById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({ error: true, message: 'Student not found', data: null });
        }

        return res.status(200).json({ error: false, message: 'Student retrieved successfully', data: student });
    } catch (error) {
        Logger.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error retrieving student', data: null });
    }
};

export const deleteAllStudents = async (req: Request, res: Response) => {
    console.log(req);
    try {
        const deleteResult = await Student.deleteMany({});

        if (!deleteResult) {
            return res.status(404).json({ error: true, message: 'No students found to delete', data: null });
        }

        return res.status(200).json({ error: false, message: 'All students deleted successfully', data: null });
    } catch (error) {
        Logger.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error deleting students', data: null });
    }
};

export const searchStudents = async (req: Request, res: Response) => {
    const query = req.query;

    try {
        const students = await Student.find(query);

        if (!students || students.length === 0) {
            return res.status(404).json({ error: true, message: 'No students found', data: null });
        }

        return res.status(200).json({ error: false, message: 'Students retrieved successfully', data: students });
    } catch (error) {
        Logger.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error retrieving students', data: null });
    }
};
