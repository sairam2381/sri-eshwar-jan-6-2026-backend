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
