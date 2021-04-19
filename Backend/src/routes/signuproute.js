const express = require("express");
const signupRouter = express.Router();
const jwt = require("jsonwebtoken");
const Userdata = require("./model/Userdata");

function router(nav) {
  //   var newuser = {
  //     username: req.body.uname,
  //     password: req.body.pw,
  //     email: req.body.email,
  //     role: req.body.role,
  //     city: req.body.city,
  //     state: req.body.state,
  //     country: req.body.country,
  //     subject: req.body.subject,
  //     vark: req.body.vark,
  //   };
  //   var user = Userdata(newuser);
  //   user
  //     .save()
  //     .then(function () {
  //       let payload = {
  //         subject: newuser.username + newuser.password + newuser.role,
  //       };
  //       let token = jwt.sign(payload, "secretKey");
  //       res.status(200).send({ token });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });

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
