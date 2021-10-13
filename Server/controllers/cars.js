const model = require('../model/cars');

const getCars = async (req, res) => res.status(200).json(await model.getCars());
const changeStatusCar = async (req, res) =>
  res.status(200).json(await model.changeStatusCar(req.params.id, req.body.status));
const deleteCar = async (req, res) => res.status(200).json(await model.deleteCar(req.params.id));
const addCar = async (req, res) => res.status(200).json(await model.addCar(req.body));

module.exports = { getCars, changeStatusCar, deleteCar, addCar };
