const express = require('express');
const PropertyController = require('../controllers/propertyController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();
const propertyController = new PropertyController();

// Apply auth middleware to all property routes
router.use('/properties', authMiddleware);

router.get('/properties', propertyController.getAllProperties);
router.post('/properties', propertyController.createProperty);
router.get('/properties/:id', propertyController.getProperty);
router.put('/properties/:id', propertyController.updateProperty);
router.delete('/properties/:id', propertyController.deleteProperty);

module.exports = router;
