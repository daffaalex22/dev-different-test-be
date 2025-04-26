const express = require('express');
const PropertyController = require('../controllers/propertyController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();
const propertyController = new PropertyController();

/**
 * @swagger
 * components:
 *   schemas:
 *     Property:
 *       type: object
 *       required:
 *         - title
 *         - price
 *         - lat
 *         - lng
 *       properties:
 *         title:
 *           type: string
 *           description: Property title
 *         price:
 *           type: number
 *           description: Property price
 *         lat:
 *           type: number
 *           description: Latitude
 *         lng:
 *           type: number
 *           description: Longitude
 *         image_url:
 *           type: string
 *           description: Property image URL
 *         bedrooms:
 *           type: number
 *           description: Number of bedrooms
 *         bathrooms:
 *           type: number
 *           description: Number of bathrooms
 *         description:
 *           type: string
 *           description: Property description
 */

/**
 * @swagger
 * /properties:
 *   get:
 *     summary: Returns all properties
 *     security:
 *       - bearerAuth: []
 *     tags: [Properties]
 *     responses:
 *       200:
 *         description: List of properties
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Property'
 *                 count:
 *                   type: integer
 *       400:
 *         description: Error occurred while fetching properties
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
router.get('/properties', authMiddleware, propertyController.getAllProperties);

/**
 * @swagger
 * /properties:
 *   post:
 *     summary: Create a new property
 *     security:
 *       - bearerAuth: []
 *     tags: [Properties]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Property'
 *     responses:
 *       201:
 *         description: Property created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Property'
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
router.post('/properties', authMiddleware, propertyController.createProperty);

/**
 * @swagger
 * /properties/{id}:
 *   get:
 *     summary: Get a property by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Property'
 *       404:
 *         description: Property not found
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
router.get('/properties/:id', authMiddleware, propertyController.getProperty);

/**
 * @swagger
 * /properties/{id}:
 *   put:
 *     summary: Update a property
 *     security:
 *       - bearerAuth: []
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Property'
 *     responses:
 *       200:
 *         description: Property updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Property'
 *       404:
 *         description: Property not found
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
router.put('/properties/:id', authMiddleware, propertyController.updateProperty);

/**
 * @swagger
 * /properties/{id}:
 *   delete:
 *     summary: Delete a property
 *     security:
 *       - bearerAuth: []
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: null
 *       404:
 *         description: Property not found
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
router.delete('/properties/:id', authMiddleware, propertyController.deleteProperty);

module.exports = router;


