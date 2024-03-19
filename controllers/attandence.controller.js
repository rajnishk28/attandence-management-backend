// attendanceController.js
const Attendance = require('../models/attandence.model');

// Create new attendance record
async function createAttendance(req, res) {
  try {
    const { Name, date, status } = req.body;
    const attendance = new Attendance({ Name, date, status });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Get all attendance records
async function getAllAttendance(req, res) {
  try {
    const attendanceRecords = await Attendance.find();
    res.json(attendanceRecords);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get attendance record by ID
async function getAttendanceById(req, res) {
  try {
    const attendance = await Attendance.findById(req.params.id);
    if (attendance) {
      res.json(attendance);
    } else {
      res.status(404).json({ message: 'Attendance record not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update attendance record
async function updateAttendance(req, res) {
  try {
    const { studentId, date, status } = req.body;
    await Attendance.findByIdAndUpdate(req.params.id, { studentId, date, status });
    res.json({ message: 'Attendance record updated successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Delete attendance record
async function deleteAttendance(req, res) {
  try {
    await Attendance.findByIdAndDelete(req.params.id);
    res.json({ message: 'Attendance record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  createAttendance,
  getAllAttendance,
  getAttendanceById,
  updateAttendance,
  deleteAttendance
};
