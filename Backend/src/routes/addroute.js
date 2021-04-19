const express = require("express");
const addRouter = express.Router();
const jwt = require("jsonwebtoken");
const Bookdata = require("./model/Bookdata");
const Authordata = require("./model/Authordata");

function router() {
  function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(401).send("Unauthorized request");
    }
    let token = req.headers.authorization.split(" ")[1];
    if (token === "null") {
      return res.status(401).send("Unauthorized request");
    }
    let payload = jwt.verify(token, "secretKey");
    if (!payload) {
      return res.status(401).send("Unauthorized request");
    }
    req.userId = payload.subject;
    next();
  }

  addRouter.post("/", verifyToken, function (req, res) {
    var bookitem = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      image: req.body.image,
      about: req.body.bookabout,
    };
    var authoritem = {
      name: req.body.author,
      genre: req.body.genre,
      place: req.body.place,
      image: req.body.authorimage,
      about: req.body.authorabout,
    };
    var book = Bookdata(bookitem);
    book.save();
    var author = Authordata(authoritem);
    author.save();
  });

  return addRouter;
}

module.exports = router;
