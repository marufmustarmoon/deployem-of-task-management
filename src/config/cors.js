const cors = require('cors');

const corsOptions = {
  origin: 'https://deploy-task-frontend.onrender.com', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204 
};

module.exports = cors(corsOptions);
