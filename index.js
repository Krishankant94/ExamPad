const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const parikshaRoutes = require("./routes/pariksha");
const parikshaAdmin = require("./routes/admin");
const port = process.env.PORT || 9000;

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/pariksha", parikshaRoutes);
app.use("/pariksha/admin", parikshaAdmin);

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
