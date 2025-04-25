const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./utils/db');
const { setUserRoutes } = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
connectDB();

// Routes
setUserRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});