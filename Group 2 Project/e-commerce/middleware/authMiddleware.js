const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware to authenticate user (common to both regular users and admins)
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Expecting 'Bearer <token>'

  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;  // Attach the user to request
    next(); // Continue to the next middleware/route handler
  } catch (err) {
    res.status(401).json({ message: 'Invalid token or not authorized' });
  }
};

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
  next();  // Proceed to the next middleware or route handler
};

// Export both middleware functions
module.exports = { authMiddleware, isAdmin };
