const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Express API',
      version: '1.0.0',
      description: 'A simple Express API documented with Swagger',
    },
    // servers will be injected dynamically in app.js to reflect current host/port
    tags: [
      { name: 'System', description: 'Service health and metadata' },
      { name: 'Levels', description: 'Level catalog and content' },
    ],
  },
  // Include route files for Swagger JSDoc scanning
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
