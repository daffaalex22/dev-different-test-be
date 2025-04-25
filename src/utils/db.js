const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://gotoekkqoqzfpcqpsiud.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvdG9la2txb3F6ZnBjcXBzaXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NjYwNjgsImV4cCI6MjA2MTE0MjA2OH0.DVUXdgs6GPuo1-XHKMt_ibEobCbwqQ0s3ucX6YFMNnw';

const supabase = createClient(supabaseUrl, supabaseKey);

const connectDB = async () => {
    try {
        // Test the connection by making a simple query to properties table
        const { data, error } = await supabase
            .from('properties')
            .select('count')
            .single();

        if (error) throw error;
        console.log('Supabase connected successfully');
        return supabase;
    } catch (error) {
        console.error('Supabase connection failed:', error.message);
        process.exit(1);
    }
};

// Export both the connection function and the supabase client
module.exports = {
    connectDB,
    supabase
};

