const express = require('express');
const path = require('path');
const app = express();

// Set CORS Header agar client GT tidak terblokir
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
});

// Melayani file di dalam folder cache (misal: /cache/items.dat)
app.use('/cache', express.static(path.join(__dirname, 'cache')));

// Jika root diakses tanpa nama file, kembalikan 400 Bad Request
app.get('/', (req, res) => {
    res.status(400).send('400 Bad Request');
});

module.exports = app;
