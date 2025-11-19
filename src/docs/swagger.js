const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Developer Assignment API",
      version: "1.0.0",
      description: "REST API with Auth, Role-Based Access & CRUD"
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1"
      }
    ]
  },
  apis: ["./src/modules/**/*.routes.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
