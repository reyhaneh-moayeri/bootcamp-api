// get all bootcamps - public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};
// get a bootcamp
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `display bootcamp ${req.params.id} ` });
};
// create a bootcamp
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcamp" });
};

// update bootcamp
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id} ` });
};

// delete bootcamp
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id} ` });
};
