// const cors = require('cors');

// const allowedOrigins = [
//   'https://deploy-task-frontend.onrender.com',
//   'http://localhost:5173',
//   // Add more allowed origins here
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true); // Allow requests with no Origin header

//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Origin not allowed by CORS'));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// module.exports = cors(corsOptions);