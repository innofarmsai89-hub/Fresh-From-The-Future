require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

// Import Routes
const contactRoutes = require('./routes/contact.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
// Configure CORS to allow requests from ANY frontend
app.use(cors({
  origin: true, // 🟢 Setting this to true dynamically reflects the request origin
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// --- Routes ---
// 1. Mount the contact routes (Prefix: /api/contact)
app.use('/api/contact', contactRoutes);

// 2. Health Check
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running smoothly! 🚀",
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.send('API is healthy');
});

// --- Server Startup ---
app.listen(PORT, () => {
  console.log(`\n✅ Server is running on: http://localhost:${PORT}`);
});