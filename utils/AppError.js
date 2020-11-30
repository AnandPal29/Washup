class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;

    this.status = `${statusCode}`.startsWith("4") ? "Fail" : "Error";
    this.isOperational = ture;

    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = AppError;