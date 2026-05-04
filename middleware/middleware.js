export const logger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    console.table( {
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      responseTime: `${Date.now() - start}ms`,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });
  });

  next();
};
