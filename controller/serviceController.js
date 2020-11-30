const Services = require("./../models/serviceModel");
const APIFeatures = require("./../utils/apiFeatures");

const catchAsync = require("./../utils/catchAsync");

exports.getAllServices = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Services.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const services = await features.query;

  res.status(200).json({
    status: "Success",
    length: services.length,
    data: {
      services,
    },
  });
});

exports.createService = catchAsync(async (req, res, next) => {
  const service = await Services.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      service,
    },
  });
});

exports.deleteService = catchAsync(async (req, res, next) => {
  const service = await Services.findByIdAndDelete(req.params.id);

  res.status(201).json({
    status: "success",
    message: "Service Succesfully Deleted",
  });
});

exports.updateSerivce = catchAsync(async (req, res, next) => {
  const service = await Services.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "Success",
    data: {
      service,
    },
  });
});
