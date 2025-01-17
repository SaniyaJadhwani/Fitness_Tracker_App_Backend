// db 

const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/fitness_tracker_app').on(
    'open', () => {
        console.log('Connected to the database');
    }
).on('error', (error) => {
    console.log(`Error connecting to the database: ${error}`);
});

module.exports = connection;