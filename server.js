const express = require('express');
const dotenv = require('dotenv');

// load env vars
dotenv.config({ path: './config/config.env' });

// Route files
const bootcamps = require('./routes/bootcamps')

const app = express();

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5555;

app.listen(
    PORT,
    console.log(`Server running in ${ process.env.NODE_ENV } mode on Port ${ PORT }`)
);