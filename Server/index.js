const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Add CORS middleware for cross-origin requests

dotenv.config();

const app = express();
const port = 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors()); // Enable CORS

// MongoDB connection string
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define Bus schema and model
const busSchema = new mongoose.Schema({
  busName: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  ticketPrice: { type: Number, required: true },
});

const Bus = mongoose.model('Bus', busSchema);

// POST route to save bus data
app.post('/api/bus', async (req, res) => {
  const { busName, from, to, ticketPrice } = req.body;

  // Validate the incoming data
  if (!busName || !from || !to || !ticketPrice) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newBus = new Bus({
    busName,
    from,
    to,
    ticketPrice,
  });

  try {
    await newBus.save();
    res.status(201).json({ message: 'Bus data saved successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving bus data', error: err });
  }
});


// GET route to retrieve all bus data
app.get('/api/bus', async (req, res) => {
    try {
      const buses = await Bus.find();  // Fetch all buses from the database
      res.status(200).json(buses);  // Send the buses as a JSON response
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving bus data', error: err });
    }
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
