const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const parikshaRoutes = require("./routes/pariksha");
const parikshaAdmin = require("./routes/admin");
const port = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/pariksha", parikshaRoutes);
app.use("/pariksha/admin", parikshaAdmin);

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
