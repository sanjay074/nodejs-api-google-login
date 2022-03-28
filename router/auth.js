const express = require('express');
const router = express.Router();
const passport = require('passport');
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.send("<h1>Login Successful</h1>")
  }); 
  module.exports = router;