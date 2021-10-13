/* eslint no-unused-vars: off */

const errorHandler = (err, req, res, next) => {
  console.log(`Error ====> ${err.message}`.red.inverse);
  res.status(500).json({
    code: 500,
    data: 'Server error',
  });
};
const notFound = (req, res) => {
  console.log(`Not Foundr ====> ${req.originalUrl}`.red.inverse);
  res.status(404).json({
    code: 404,
    data: 'Not Found',
  });
};

module.exports = { errorHandler, notFound };
