let express = require("express");
let enquiryRoutes = express.Router();
const {
  enquiryInsertController,
  enquiryGetController,
  enquiryDeleteController,
  enquiryUpdateController,
} = require("../../controllers/web/userEnquiryController");

enquiryRoutes.post("/insert-enquiry", enquiryInsertController);
enquiryRoutes.get("/get-enquiry", enquiryGetController);
enquiryRoutes.delete("/delete-enquiry/:id", enquiryDeleteController);
enquiryRoutes.put("/update-enquiry/:id", enquiryUpdateController);

module.exports = enquiryRoutes;