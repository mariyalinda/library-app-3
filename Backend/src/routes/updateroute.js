const express = require("express");
const updateRouter = express.Router();
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

  updateRouter.put("/book", verifyToken, (req, res) => {
    console.log(req.body);
    (id = req.body._id),
      (title = req.body.title),
      (author = req.body.author),
      (genre = req.body.genre),
      (image = req.body.image),
      (about = req.body.about),
      Bookdata.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            title: title,
            author: author,
            genre: genre,
            image: image,
            about: about,
          },
        }
      ).then(function () {
        res.send();
      });
  });

  updateRouter.put("/author", verifyToken, function (req, res) {
    const id = req.params.id;
    var newauthor = {
      name: req.body.name,
      place: req.body.place,
      genre: req.body.genre,
      image: req.body.authorimg,
      about: req.body.authorabout,
    };
    Authordata.findByIdAndUpdate({ _id: id }, { $set: newauthor }, function () {
      res.send();
    });
  });
  return updateRouter;
}

module.exports = router;
