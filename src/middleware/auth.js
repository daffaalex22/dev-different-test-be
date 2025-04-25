const { createClient } = require('@supabase/supabase-js');
const logger = require('../utils/logger');

// Get these from your environment variables
const supabaseUrl = 'https://gotoekkqoqzfpcqpsiud.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvdG9la2txb3F6ZnBjcXBzaXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NjYwNjgsImV4cCI6MjA2MTE0MjA2OH0.DVUXdgs6GPuo1-XHKMt_ibEobCbwqQ0s3ucX6YFMNnw';

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader) {
            logger.error('No authorization header');
            return res.status(401).json({ error: 'No authorization token provided' });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            logger.error('Invalid authorization header format');
            return res.status(401).json({ error: 'Invalid authorization header' });
        }

        // Create a new Supabase client with the user's token
        const supabase = createClient(supabaseUrl, supabaseKey, {
            global: {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        });

        // Set the authenticated client in the request object
        req.supabase = supabase;
        
        next();
    } catch (error) {
        logger.error('Auth middleware error:', error);
        res.status(401).json({ error: 'Authentication failed' });
    }
};

module.exports = authMiddleware;
