"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAdmins = exports.deleteAllAdmins = exports.deleteAdmin = exports.updateAdmin = exports.getAdminById = exports.getAllAdmins = exports.adminLogin = exports.adminRegister = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const admin_1 = __importDefault(require("../models/admin"));
const logger_1 = __importDefault(require("../utils/logger"));
const adminRegister = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if admin already exists
        const existingAdmin = await admin_1.default.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ error: true, message: 'Admin already registered', data: null });
        }
        // Hash password
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        // Create new admin
        const newAdmin = new admin_1.default({ username, password: hashedPassword });
        const savedAdmin = await newAdmin.save();
        return res.status(201).json({ error: false, message: 'Admin registered successfully', data: savedAdmin });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error registering admin', data: null });
    }
};
exports.adminRegister = adminRegister;
const adminLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Find admin by username
        const admin = await admin_1.default.findOne({ username });
        if (!admin) {
            return res.status(404).json({ error: true, message: 'Admin not found', data: null });
        }
        // Compare passwords
        const isMatch = await bcryptjs_1.default.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ error: true, message: 'Invalid credentials', data: null });
        }
        // Return token or session for authentication
        // Example: Generate JWT token and return it
        return res.status(200).json({ error: false, message: 'Admin logged in successfully', data: null });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: error.message || 'Error logging in admin', data: null });
    }
};
exports.adminLogin = adminLogin;
// Get all admins (pagination and limit)
const getAllAdmins = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const admins = await admin_1.default.find()
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit))
            .exec();
        return res.status(200).json({ error: false, message: 'Admins retrieved successfully', data: admins });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: 'Error retrieving admins', data: null });
    }
};
exports.getAllAdmins = getAllAdmins;
// Get a single admin by ID
const getAdminById = async (req, res) => {
    const adminId = req.params.id;
    try {
        const admin = await admin_1.default.findById(adminId);
        if (!admin) {
            return res.status(404).json({ error: true, message: 'Admin not found', data: null });
        }
        return res.status(200).json({ error: false, message: 'Admin retrieved successfully', data: admin });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: 'Error retrieving admin', data: null });
    }
};
exports.getAdminById = getAdminById;
// Update an admin
const updateAdmin = async (req, res) => {
    const adminId = req.params.id;
    const { username, password } = req.body;
    try {
        const updatedAdmin = await admin_1.default.findByIdAndUpdate(adminId, { username, password }, { new: true });
        if (!updatedAdmin) {
            return res.status(404).json({ error: true, message: 'Admin not found', data: null });
        }
        return res.status(200).json({ error: false, message: 'Admin updated successfully', data: updatedAdmin });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: 'Error updating admin', data: null });
    }
};
exports.updateAdmin = updateAdmin;
// Delete an admin
const deleteAdmin = async (req, res) => {
    const adminId = req.params.id;
    try {
        const deletedAdmin = await admin_1.default.findByIdAndDelete(adminId);
        if (!deletedAdmin) {
            return res.status(404).json({ error: true, message: 'Admin not found', data: null });
        }
        return res.status(200).json({ error: false, message: 'Admin deleted successfully', data: deletedAdmin });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: 'Error deleting admin', data: null });
    }
};
exports.deleteAdmin = deleteAdmin;
// Delete all admins
const deleteAllAdmins = async (req, res) => {
    console.log(req);
    try {
        await admin_1.default.deleteMany({});
        return res.status(200).json({ error: false, message: 'All admins deleted successfully', data: null });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: 'Error deleting all admins', data: null });
    }
};
exports.deleteAllAdmins = deleteAllAdmins;
// Search for admins
const searchAdmins = async (req, res) => {
    const { username } = req.query;
    try {
        const admins = await admin_1.default.find({ username: { $regex: username, $options: 'i' } });
        if (admins.length === 0) {
            return res.status(404).json({ error: true, message: 'No admins found', data: null });
        }
        return res.status(200).json({ error: false, message: 'Admins found', data: admins });
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(500).json({ error: true, message: 'Error searching for admins', data: null });
    }
};
exports.searchAdmins = searchAdmins;
//# sourceMappingURL=admin.contoller.js.map