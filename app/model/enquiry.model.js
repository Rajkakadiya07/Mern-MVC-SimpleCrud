const express = require("express");
let mongoose = require("mongoose");
require("dotenv").config();

const app = express();

let userEnquiry = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

let enquiryModel = mongoose.model("enquiry", userEnquiry);
module.exports = enquiryModel;
