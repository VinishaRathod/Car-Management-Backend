const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectdb');
const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/cars');
const app = express();

// Connect to the database
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
