const express = require('express');
const healthController = require('../controllers/health');
const metaController = require('../controllers/meta');

const router = express.Router();

// Health endpoint
/**
 * @swagger
 * tags:
 *   - name: System
 *     description: Service health and metadata
 *   - name: Levels
 *     description: Level catalog and content
 */

/**
 * @swagger
 * /:
 *   get:
 *     tags: [System]
 *     summary: Health endpoint
 *     description: Returns service health status and environment context.
 *     responses:
 *       200:
 *         description: Service health check passed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Service is healthy
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 environment:
 *                   type: string
 *                   example: development
 */
router.get('/', healthController.check.bind(healthController));

/**
 * @swagger
 * /version:
 *   get:
 *     tags: [System]
 *     summary: Get backend version
 *     description: Returns the running backend version and build time metadata.
 *     responses:
 *       200:
 *         description: Version information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 version:
 *                   type: string
 *                   description: Semver-like application version.
 *                   example: 0.1.0
 *                 buildTime:
 *                   type: string
 *                   format: date-time
 *                   description: The build timestamp of the running service.
 *                   example: 2024-01-01T12:00:00.000Z
 */
router.get('/version', metaController.version.bind(metaController));

/**
 * @swagger
 * /levels:
 *   get:
 *     tags: [Levels]
 *     summary: List available levels
 *     description: Returns a list of available puzzle levels for the Light Weaver MVP.
 *     responses:
 *       200:
 *         description: A list of levels
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 levels:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "1"
 *                       name:
 *                         type: string
 *                         example: "Intro Beam"
 *                       description:
 *                         type: string
 *                         example: "Learn the basics of reflecting a single laser to a target."
 *                       difficulty:
 *                         type: string
 *                         example: "easy"
 */
router.get('/levels', metaController.listLevels.bind(metaController));

/**
 * @swagger
 * /levels/{id}:
 *   get:
 *     tags: [Levels]
 *     summary: Get level by ID
 *     description: Returns a level definition compatible with the frontend schema for simulation.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Level identifier
 *     responses:
 *       200:
 *         description: Level definition
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 grid:
 *                   type: object
 *                   properties:
 *                     rows: { type: integer, example: 8 }
 *                     cols: { type: integer, example: 8 }
 *                 lasers:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       row: { type: integer }
 *                       col: { type: integer }
 *                       dir: { type: string, description: "N | S | E | W" }
 *                       color: { type: string }
 *                 targets:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       row: { type: integer }
 *                       col: { type: integer }
 *                 obstacles:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       row: { type: integer }
 *                       col: { type: integer }
 *                 mirrors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       row: { type: integer }
 *                       col: { type: integer }
 *                       orientation: { type: string, description: "Slash '/' or backslash '\\\\'" }
 *                 rules:
 *                   type: object
 *                 metadata:
 *                   type: object
 *       404:
 *         description: Level not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Level not found
 */
router.get('/levels/:id', metaController.getLevel.bind(metaController));

module.exports = router;
