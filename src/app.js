const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./utils/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Initialize Supabase connection
connectDB().catch(console.error);

// Routes
app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

