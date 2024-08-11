const express = require('express');
const { getCars, createCar, updateCar, deleteCar } = require('../controllers/carController');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getCars);
router.post('/', verifyToken, createCar);
router.put('/:id', verifyToken, updateCar);
router.delete('/:id', verifyToken, deleteCar);

module.exports = router;
