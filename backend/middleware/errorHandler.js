function errorHandler(err, req, res, next) {
    console.error(err.stack);
  
    // Handle different types of errors
    if (err.name === 'ValidationError') {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
  module.exports = errorHandler;
  