const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ReportSchema = new Schema({ 
  Reg_Date: {
    type: String,
    required: true
  }, 
  UserName: {
    type: String,
    required: true
  },
  Main_Content: {
    type: String,
    required: true
  },
  Issue_to_Raise: {
    type: String,
    required: true
  },
  Deposit_Amount: {
    type: String,
    required: true
  },
  Reg_Date_num: {
    type: Number,
    required: true
  } ,
  Other: {
    type: String,
    required: false
  }
});
module.exports = Report = mongoose.model("reports", ReportSchema);