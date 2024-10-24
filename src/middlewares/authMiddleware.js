const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_direct_secret_key';

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);  
    req.user = decoded;  
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
