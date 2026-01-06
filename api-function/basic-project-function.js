const Admin = require("../modules/admin");
exports.getAdmindetails = async (req, res) => {
  try {
    const getAdmindetails = await Admin.find({});
    return res.status(200).json({
      success: true,
      data: getAdmindetails,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};
