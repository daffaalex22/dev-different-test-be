const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./utils/db');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// Initialize Supabase connection
connectDB().catch(console.error);

// Routes
app.use(propertyRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
