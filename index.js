const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const parikshaRoutes = require("./routes/pariksha");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/pariksha", parikshaRoutes);

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
