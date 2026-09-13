const express = require('express');
const path = require('path');
const app = express();

// Set CORS Header agar tidak di-block client GT
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
});

// Menyajikan folder cache secara langsung
app.use('/cache', express.static(path.join(__dirname, 'cache')));

// Respons default 400 jika diakses tanpa file
app.get('/', (req, res) => {
    res.status(400).send('400 Bad Request');
});

module.exports = app;
