const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Simple Task Management API',
    version: '1.0.0',
    description: `This API allows users to manage tasks. To access protected routes, you need to authenticate using a Bearer token.
                  \n\n**How to Use the Bearer Token:**
                  \n1. Obtain your token from the login or signup process.
                  \n2. Click the "Authorize" button at the top right.
                  \n3. Enter your token in the format: \`Bearer <your-token-here>\`.
                  \n4. After authorization, all requests to protected routes will include your token automatically.`,
    contact: {
      name: 'Your Name',
      email: 'your-email@example.com',
    },
  },
  servers: [
    {
      url: 'https://deployem-of-task-management.onrender.com',
      description: 'Deployed server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      Task: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'Task ID',
            example: 1,
          },
          title: {
            type: 'string',
            description: 'Title of the task',
            example: 'Finish the project',
          },
          description: {
            type: 'string',
            description: 'Description of the task',
            example: 'Complete all pending items for the project',
          },
          status: {
            type: 'string',
            enum: ['Open', 'In-progress', 'Completed'],
            description: 'The status of the task',
            example: 'Open',
          },
          userId: {
            type: 'integer',
            description: 'The ID of the user who created the task',
            example: 123,
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Task creation timestamp',
            example: '2024-01-01T12:00:00Z',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Task update timestamp',
            example: '2024-01-01T13:00:00Z',
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js', './src/models/*.js'], // Paths to your routes and models
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('Swagger Docs available at /api-docs');
};
