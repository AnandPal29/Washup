const fs = require("fs");
const express = require("express");

const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controller/errorController");

const serviceRouter = require("./routes/serviceRoutes");

const app = express();

console.log(process.env.NODE_ENV);
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// app.get("/api/v1/services", getAllServices);
// app.post("/api/v1/services", createService);

// app.route("/api/v1/services").get(getAllServices).post(createService);
// app.route("/api/v1/services/:id").delete(deleteService).patch(updateSerivce);
// app.delete("/api/v1/services/:id", deleteService);
// app.patch("/api/v1/services/:id", updateSerivce);

//ROUTES
app.use("/api/v1/services", serviceRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Cannot Find ${req.originalUrl} on this Server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
 