const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("./model/Bookdata");

function router() {
  booksRouter.get("/", function (req, res) {
    Bookdata.find().then(function (books) {
      res.send(books);
    });
  });

  booksRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    Bookdata.findOne({ _id: id }).then(function (book) {
      res.send(book);
    });
  });
  return booksRouter;
}

module.exports = router;
