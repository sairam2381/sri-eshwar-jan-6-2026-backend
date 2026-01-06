const mongoose = require("mongoose");
exports.connectFunction = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://devopsstudy883_db_user:cpJp77PzjtoRLmci@cluster0.yxr54kq.mongodb.net/"
    );
    console.log("Db connetion successful");
  } catch (e) {
    console.log("The error", e);
  }
};
