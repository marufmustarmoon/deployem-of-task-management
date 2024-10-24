const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'task_management_system_2azw',          // Database name
  'task_management_system_2azw_user',     // Database user
  'QAIgrcDGdL7yf4zJaB03jD8J2KiU7chK',     // Database password
  {
    host: 'dpg-csd8e3ggph6c73em0og0-a.singapore-postgres.render.com', // Database host
    port: 5432,                           // Default PostgreSQL port
    dialect: 'postgres',                  // Database dialect 
    logging: false,                       // Disable logging (for debugging purposes)
    dialectOptions: {
      ssl: {
        require: true,                    // This will enforce SSL connection
        rejectUnauthorized: false          // Allow self-signed certificates (no verification)
      }
    }
  }
);

module.exports = sequelize;
