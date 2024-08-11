const Car = require('../models/Car');

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createCar = async (req, res) => {
  const { make, model, year, vin } = req.body;

  try {
    const car = new Car({ make, model, year, vin });
    await car.save();
    res.status(201).json(car);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateCar = async (req, res) => {
  const { make, model, year, vin } = req.body;

  try {
    const car = await Car.findByIdAndUpdate(req.params.id, { make, model, year, vin }, { new: true });
    res.json(car);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.json({ message: 'Car deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports={getCars,createCar,updateCar,deleteCar}
