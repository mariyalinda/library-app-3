const express = require("express");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const Userdata = require("./model/Userdata");

function router() {
  //   let username = req.body.uname;
  //   let password = req.body.pw;
  //   let role = req.body.role;
  //   Userdata.findOne(
  //     {
  //       $and: [{ username: username }, { password: password }, { role: role }],
  //     },
  //     function (err, user) {
  //       if (user) {
  //         let payload = { subject: username + password + role };
  //         let token = jwt.sign(payload, "secretKey");
  //         res.status(200).send({ token });
  //       } else {
  //         res.status(401).send("User does not exist");
  //       }
  //     }
  //   );
  // });
  loginRouter.post("/", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    Userdata.findOne(
      {
        $and: [{ username: username }, { password: password }],
      },
      function (err, user) {
        if (user) {
          let payload = { subject: username + password + role };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token });
        } else {
          res.status(401).send("User does not exist");
        }
      }
    );
  });
  return loginRouter;
}

module.exports = router;
