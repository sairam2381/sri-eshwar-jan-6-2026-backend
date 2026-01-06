const Admin = require("../modules/admin");
//const User
exports.getAdmindetails = async (req, res) => {
  try {
    const getAdmindetails = await Admin.find();
    return res.status(200).json({
      success: true,
      data: getAdmindetails,
    });
  } catch (e) {
    //console.log("The console log ENTERING OVER HERE:");
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};
exports.postAdmindetails = async (req, res) => {
  try {
    const { firstName, email, collegeName } = req.body; //post
    console.log("The request body:", req.body);

    if (!firstName || !email || !collegeName) {
      return res.status(404).json({
        success: false,
        message: "some of the details are empty",
      });
    }
    const createUser = await Admin.create({
      firstName,
      email,
      // password,
      collegeName,
    });
    return res.status(200).json({
      success: true,
      message: "User is created",
    });
  } catch (e) {
    //console.log("The console log ENTERING OVER HERE:");
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

exports.deleteAdminDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("The id details:", id);

    const checkId = await Admin.findById(id);
    if (!checkId) {
      return res.status(404).json({
        success: false,
        message: "Id is not existing",
      });
    }
    await Admin.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Data is deleted successfully",
    });
  } catch (e) {
    //console.log("The console log ENTERING OVER HERE:");
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

exports.updateDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("The ID DETAILS:", id);

    const { email, firstName, password, collegeName } = req.body;
    const updateDetails = await Admin.findByIdAndUpdate(
      id,
      {
        email,
        firstName,
        password,
        collegeName,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Data is updated successfully",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};
