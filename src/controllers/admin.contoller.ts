import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Admin from "../models/admin";
import Logger from "../utils/logger";

export const adminRegister = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ $or: [{ username }, { email }] });

    if (existingAdmin) {
      return res.status(400).json({ error: true, message: "Admin already registered", data: null });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const newAdmin = new Admin({ username, email, password: hashedPassword });
    const savedAdmin = await newAdmin.save();

    return res.status(201).json({ error: false, message: "Admin registered successfully", data: savedAdmin });
  } catch (error) {
    Logger.error(error);
    return res.status(500).json({ error: true, message: error.message || "Error registering admin", data: null });
  }
};

export const adminLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Find admin by username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(404).json({ error: true, message: "Admin not found", data: null });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ error: true, message: "Invalid credentials", data: null });
    }

    // If credentials are valid, return admin details
    return res.status(200).json({
      error: false,
      message: "Admin logged in successfully",
      data: {
        username: admin.username,
        // Add other relevant fields as needed
      },
    });
  } catch (error) {
    console.error("Error logging in admin:", error);
    return res.status(500).json({ error: true, message: error.message || "Error logging in admin", data: null });
  }
};

// Get all admins (pagination and limit)
export const getAllAdmins = async (req: Request, res: Response) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const admins = await Admin.find()
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit))
      .exec();

    return res.status(200).json({ error: false, message: "Admins retrieved successfully", data: admins });
  } catch (error) {
    Logger.error(error);
    return res.status(500).json({ error: true, message: "Error retrieving admins", data: null });
  }
};

// Get a single admin by ID
export const getAdminById = async (req: Request, res: Response) => {
  const adminId = req.params.id;

  try {
    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(404).json({ error: true, message: "Admin not found", data: null });
    }

    return res.status(200).json({ error: false, message: "Admin retrieved successfully", data: admin });
  } catch (error) {
    Logger.error(error);
    return res.status(500).json({ error: true, message: "Error retrieving admin", data: null });
  }
};

// Update an admin
export const updateAdmin = async (req: Request, res: Response) => {
  const adminId = req.params.id;
  const { username, password } = req.body;

  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, { username, password }, { new: true });

    if (!updatedAdmin) {
      return res.status(404).json({ error: true, message: "Admin not found", data: null });
    }

    return res.status(200).json({ error: false, message: "Admin updated successfully", data: updatedAdmin });
  } catch (error) {
    Logger.error(error);
    return res.status(500).json({ error: true, message: "Error updating admin", data: null });
  }
};

// Delete an admin
export const deleteAdmin = async (req: Request, res: Response) => {
  const adminId = req.params.id;

  try {
    const deletedAdmin = await Admin.findByIdAndDelete(adminId);

    if (!deletedAdmin) {
      return res.status(404).json({ error: true, message: "Admin not found", data: null });
    }

    return res.status(200).json({ error: false, message: "Admin deleted successfully", data: deletedAdmin });
  } catch (error) {
    Logger.error(error);
    return res.status(500).json({ error: true, message: "Error deleting admin", data: null });
  }
};

// Delete all admins
export const deleteAllAdmins = async (req: Request, res: Response) => {
  console.log(req);
  try {
    await Admin.deleteMany({});

    return res.status(200).json({ error: false, message: "All admins deleted successfully", data: null });
  } catch (error) {
    Logger.error(error);
    return res.status(500).json({ error: true, message: "Error deleting all admins", data: null });
  }
};

// Search for admins
export const searchAdmins = async (req: Request, res: Response) => {
  const { username } = req.query;

  try {
    const admins = await Admin.find({ username: { $regex: username as string, $options: "i" } });

    if (admins.length === 0) {
      return res.status(404).json({ error: true, message: "No admins found", data: null });
    }

    return res.status(200).json({ error: false, message: "Admins found", data: admins });
  } catch (error) {
    Logger.error(error);
    return res.status(500).json({ error: true, message: "Error searching for admins", data: null });
  }
};

export const adminLogout = async (req: Request, res: Response) => {
  try {
    console.log(req);
    // Here, you would invalidate the current JWT token or session
    // Depending on your setup, this could mean removing the token from a blacklist, etc.
    // For simplicity, let's assume the token is stored in a cookie

    // Clear the token from cookies (assuming you set it this way)
    res.clearCookie("token");

    return res.status(200).json({ error: false, message: "Admin logged out successfully", data: null });
  } catch (error) {
    Logger.error(error);
    return res.status(500).json({ error: true, message: "Error logging out admin", data: null });
  }
};
