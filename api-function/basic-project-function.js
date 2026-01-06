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
    const { firstName, email, password, collegeName } = req.body; //post
    if (!firstName || !email || !password || !collegeName) {
      return res.status(404).json({
        success: false,
        message: "some of the details are empty",
      });
    }
    const createUser = await Admin.create({
      firstName,
      email,
      password,
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
