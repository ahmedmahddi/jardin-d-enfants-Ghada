import logger from "./logger.middleware.js";

const errorHandler = (err, req, res, next) => {
  logger("combined")(err, req, res, error => {
    if (error) console.error(error);
  });
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ error: message });
};

export default errorHandler;
