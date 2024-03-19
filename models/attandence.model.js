// attendanceModel.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Late'],
        default: 'Absent'
    }
});

module.exports = mongoose.model('Attendance', attendanceSchema);
