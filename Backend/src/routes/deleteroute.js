const express = require("express");
const deleteRouter = express.Router();
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

  deleteRouter.get("/book/:id", verifyToken, function (req, res) {
    const id = req.params.id;
    Bookdata.findByIdAndDelete({ _id: id }).then(() => {
      console.log("Successfully deleted!");
      res.send();
    });
  });
  deleteRouter.get("/author/:id", function (req, res) {
    const id = req.params.id;
    Authordata.findOne({ _id: id }).then(function (author) {
      res.render("authordeleteform", {
        nav,
        title: "Delete",
        author,
      });
    });
  });
  // deleteRouter.get("/book/:id/confirm", function (req, res) {
  //   const id = req.params.id;
  //   Bookdata.deleteOne({ _id: id }).then(function () {
  //     res.redirect("/books");
  //   });
  // });
  deleteRouter.get("/author/:id/confirm", function (req, res) {
    const id = req.params.id;
    Authordata.deleteOne({ _id: id }).then(function () {
      res.redirect("/authors");
    });
  });
  return deleteRouter;
}

module.exports = router;
