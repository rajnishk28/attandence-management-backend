const express = require('express');
const app = express();
const cors = require('cors');
const attandenceRoutes = require('./routes/attandence.routes');

app.use(express.json());
app.use(cors());

app.use(attandenceRoutes);

app.get('/', (req, res) => {
    res.send('Attendance Management App');
});

module.exports = app;