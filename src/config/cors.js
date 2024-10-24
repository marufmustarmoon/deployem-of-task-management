const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:5173', 'https://deploy-task-frontend.onrender.com'], 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204 
};

module.exports = cors(corsOptions);
