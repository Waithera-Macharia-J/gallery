const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');  // keep your config

// Initialize app
const app = express();

// Determine environment (production, development, test)
const env = process.env.NODE_ENV || app.settings.env || 'development';

// Build Mongo URI (use environment variable first, then fallback to config)
const MONGODB_URI = process.env.MONGODB_URI || config.mongoURI[env];

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to Database: ${MONGODB_URI}`))
    .catch(err => console.error('MongoDB connection error:', err));

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', index);
app.use('/image', image);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});

module.exports = app;   // <-- keep this for tests
