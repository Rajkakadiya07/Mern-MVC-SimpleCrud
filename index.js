let express = require("express");
let app = express();
var mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());

const enquiryRoutes = require("./app/routes/web/enquiryRoutes")
app.use("", enquiryRoutes)


mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server is running on port ", process.env.PORT || 5000);
    });
  })
  .catch((err) => {
    console.log(err);
  });

