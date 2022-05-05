const express = require("express");
const passport = require("passport");

const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (authError, user) => {
    if(authError) {
      console.error(authError);
      return next(authError);
    }
    return req.login(user, (loginError) => {
      if(loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.status(200)
        .json({
          isLoggedIn: true,
          username: user.username
        });
    });
  })(req, res, next);
});

module.exports = router;