

const cors = require('cors');

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    // List of allowed origins
    const allowedOrigins = [
      'http://localhost:5173', // Your local development URL
      'https://deploy-task-frontend.onrender.com', // Your production URL
    ];
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true); // Allow the origin
    }
    return callback(new Error('Not allowed by CORS')); // Block the origin
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204 
};

module.exports = cors(corsOptions);
