const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./utils/swagger');
const { connectDB } = require('./utils/db');
const propertyRoutes = require('./routes/propertyRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// CORS configuration
const corsOptions = {
    origin: [
        'http://localhost:3000',
        'https://dev-different-test-fe.vercel.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Initialize Supabase connection
connectDB().catch(console.error);

// Routes
app.use(propertyRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});


