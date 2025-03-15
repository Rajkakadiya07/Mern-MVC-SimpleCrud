const enquiryModel = require("../../model/enquiry.model");

let enquiryInsertController = (req, res) => {
  let { Sname, Semail, Smessage } = req.body;
  let enquiry = new enquiryModel({
    name: Sname,
    email: Semail,
    message: Smessage,
  });
  enquiry
    .save()
    .then(() => {
      res.send("Enquiry submitted successfully");
    })
    .catch((err) => {
      res.send(err);
    });
};

let enquiryGetController = async (req, res) => {
  let enquiry = await enquiryModel.find();
  res.send({ status: 1, message: "enquiry data", data: enquiry });
};

let enquiryDeleteController = async (req, res) => {
  let id = req.params.id;
  let deleteEnquiry = await enquiryModel.deleteOne({ _id: id });
  res.send({ status: 1, message: "deleted", deleteEnquiry });
};

let enquiryUpdateController = async (req, res) => {
  let id = req.params.id;
  let { Sname, Semail, Smessage } = req.body;
  // let obj = {name:Sname, email:Semail, message:Smessage};
  // let updateEnquiry = await enquiryModel.updateOne({_id:id}, obj);
  let updateEnquiry = await enquiryModel.updateOne(
    { _id: id },
    { name: Sname, email: Semail, message: Smessage }
  );
  res.send({ status: 1, message: "updated", updateEnquiry });
};

module.exports = {
  enquiryInsertController,
  enquiryGetController,
  enquiryDeleteController,
  enquiryUpdateController,
};
