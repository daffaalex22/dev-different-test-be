const logger = require('../utils/logger');

class PropertyController {
    async createProperty(req, res) {
        try {
            const { title, price, lat, lng, image_url, bedrooms, bathrooms, description } = req.body;
            const user_id = req.user.id; // Assuming you have auth middleware setting this

            const { data, error } = await supabase
                .from('properties')
                .insert([
                    { user_id, title, price, lat, lng, image_url, bedrooms, bathrooms, description }
                ])
                .select()
                .single();

            if (error) throw error;
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getProperty(req, res) {
        try {
            const { id } = req.params;
            const { data, error } = await supabase
                .from('properties')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            if (!data) return res.status(404).json({ error: 'Property not found' });
            
            res.json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateProperty(req, res) {
        try {
            const { id } = req.params;
            const { title, price, lat, lng, image_url, bedrooms, bathrooms, description } = req.body;

            const { data, error } = await supabase
                .from('properties')
                .update({ title, price, lat, lng, image_url, bedrooms, bathrooms, description })
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;
            if (!data) return res.status(404).json({ error: 'Property not found' });

            res.json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteProperty(req, res) {
        try {
            const { id } = req.params;
            const { error } = await supabase
                .from('properties')
                .delete()
                .eq('id', id);

            if (error) throw error;
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllProperties(req, res) {
        logger.info('Fetching all properties');
        try {
            // Use the authenticated Supabase client from the middleware
            const { data, error } = await req.supabase
                .from('properties')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                logger.error('Error fetching properties:', error);
                throw error;
            }

            logger.info('Properties fetched successfully, count:', data?.length);
            res.json(data);
        } catch (error) {
            logger.error('Failed to fetch properties:', error);
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = PropertyController;

