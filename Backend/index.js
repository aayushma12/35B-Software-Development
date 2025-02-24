const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/database');
const userRoute = require('./routes/userRoute');
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', userRoute);

const PORT = process.env.PORT || 4000;

// Sync database
db.sync({ alter: true })
    .then(() => {
        console.log('Database synced successfully');
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });

// Test database connection
db.authenticate()
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});