const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api/', apiRoutes);

router.get('*', (req, res) => {
  res.send('404: API route not found.').status(404);
});

module.exports = router;
