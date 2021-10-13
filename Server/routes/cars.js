const express = require('express');
const asyncHandler = require('express-async-handler');
const { getCars, deleteCar, changeStatusCar, addCar } = require('../controllers/cars');

const router = express.Router();

router.get('/cars', asyncHandler(getCars));
router.patch('/cars/:id', asyncHandler(changeStatusCar));
router.delete('/cars/:id', asyncHandler(deleteCar));
router.post('/cars', asyncHandler(addCar));

module.exports = router;
