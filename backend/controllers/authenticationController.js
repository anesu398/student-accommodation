const authService = require('../services/authenticationService');

async function login(req, res) {
  try {
    // Authenticate user (e.g., verify credentials)
    // If authentication succeeds, generate JWT token
    const token = authService.generateToken({ userId: user._id });
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

async function register(req, res) {
  try {
    // Register new user (e.g., create user in the database)
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Registration failed' });
  }
}

module.exports = { login, register };
