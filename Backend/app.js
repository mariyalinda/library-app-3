const express = require("express");
const cors = require("cors");
const app = new express();
const port = process.env.PORT || 5000;

app.use(cors());

const booksRouter = require("./src/routes/bookRoutes");
const authorRouter = require("./src/routes/authorRoutes");
const loginRouter = require("./src/routes/loginroute");
const signupRouter = require("./src/routes/signuproute");
const addRouter = require("./src/routes/addroute");
const updateRouter = require("./src/routes/updateroute");
const deleteRouter = require("./src/routes/deleteroute");
app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/books", booksRouter);
app.use("/authors", authorRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/addbook", addRouter);
app.use("/update", updateRouter);
app.use("/delete", deleteRouter);

app.listen(port, () => {
  console.log("Server ready at " + port);
});
