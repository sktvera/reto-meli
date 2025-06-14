const router = require('express').Router();

const Profile = require('./view.js');

// Middleware to check authentication.
router.use((req, res, next) => {
  if (req.authenticated) {
      next();
  } else {
      res.redirect('/login');
  }
});

router.get('/', async function(req, res, next) {
  res.render(Profile, {});
});

module.exports = router;
