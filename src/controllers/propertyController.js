const logger = require('../utils/logger');

class PropertyController {
    async createProperty(req, res) {
        try {
            const { title, price, lat, lng, image_url, bedrooms, bathrooms, description } = req.body;
            const user_id = req.user.id;

            const { data, error } = await req.supabase
                .from('properties')
                .insert([
                    { user_id, title, price, lat, lng, image_url, bedrooms, bathrooms, description }
                ])
                .select()
                .single();

            if (error) throw error;

            res.status(201).json({
                success: true,
                message: 'Property created successfully',
                data: data
            });
        } catch (error) {
            logger.error('Create property error:', error);
            res.status(400).json({
                success: false,
                message: error.message,
                error: error.details || error.message
            });
        }
    }

    async getProperty(req, res) {
        try {
            const { id } = req.params;
            const { data, error } = await req.supabase
                .from('properties')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: 'Property not found',
                    data: null
                });
            }
            
            res.json({
                success: true,
                message: 'Property retrieved successfully',
                data: data
            });
        } catch (error) {
            logger.error('Get property error:', error);
            res.status(400).json({
                success: false,
                message: error.message,
                error: error.details || error.message
            });
        }
    }

    async updateProperty(req, res) {
        try {
            const { id } = req.params;
            const { title, price, lat, lng, image_url, bedrooms, bathrooms, description } = req.body;

            const { data, error } = await req.supabase
                .from('properties')
                .update({ title, price, lat, lng, image_url, bedrooms, bathrooms, description })
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;
            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: 'Property not found',
                    data: null
                });
            }

            res.json({
                success: true,
                message: 'Property updated successfully',
                data: data
            });
        } catch (error) {
            logger.error('Update property error:', error);
            res.status(400).json({
                success: false,
                message: error.message,
                error: error.details || error.message
            });
        }
    }

    async deleteProperty(req, res) {
        try {
            const { id } = req.params;
            const { error } = await req.supabase
                .from('properties')
                .delete()
                .eq('id', id);

            if (error) throw error;

            res.status(200).json({
                success: true,
                message: 'Property deleted successfully',
                data: null
            });
        } catch (error) {
            logger.error('Delete property error:', error);
            res.status(400).json({
                success: false,
                message: error.message,
                error: error.details || error.message
            });
        }
    }

    async getAllProperties(req, res) {
        logger.info('Fetching all properties');
        try {
            const { data, error } = await req.supabase
                .from('properties')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                logger.error('Error fetching properties:', error);
                throw error;
            }

            logger.info('Properties fetched successfully, count:', data?.length);
            res.json({
                success: true,
                message: 'Properties retrieved successfully',
                data: data,
                count: data.length
            });
        } catch (error) {
            logger.error('Failed to fetch properties:', error);
            res.status(400).json({
                success: false,
                message: error.message,
                error: error.details || error.message
            });
        }
    }
}

module.exports = PropertyController;


