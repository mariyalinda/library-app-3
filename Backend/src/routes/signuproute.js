const express = require("express");
const signupRouter = express.Router();
const jwt = require("jsonwebtoken");
const Userdata = require("./model/Userdata");

function router(nav) {
  signupRouter.post("/", function (req, res, next) {
    var newuser = {
      email: req.body.email,
      mobile: req.body.mobile,
      username: req.body.username,
      password: req.body.password,
    };
    var user = Userdata(newuser);
    user
      .save()
      .then(function () {
        let payload = {
          subject: newuser.username + newuser.password + newuser.role,
        };
        let token = jwt.sign(payload, "secretKey");
        res.status(200).send({ token });
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return signupRouter;
}

module.exports = router;
