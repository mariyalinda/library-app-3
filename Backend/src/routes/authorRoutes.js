const express = require("express");
const jwt = require("jsonwebtoken");
const authorRouter = express.Router();
const Authordata = require("./model/Authordata");

function router() {
  authorRouter.get("/", function (req, res) {
    Authordata.find().then(function (authors) {
      res.send(authors);
    });
  });

  authorRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    Authordata.findOne({ _id: id }).then(function (author) {
      res.send(author);
    });
  });
  return authorRouter;
}
module.exports = router;
