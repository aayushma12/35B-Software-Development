const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/database');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const cartRoute = require('./routes/cartRoute');
const cors = require('cors');
const wishlistRoute = require('./routes/wishlistRoute');
const orderRoute = require('./routes/orderRoute');
const reviewRoute = require('./routes/reviewRoute');
const messageRoute = require('./routes/messageRoute');
const adminRoute = require('./routes/adminRoute'); // Add the new route

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', userRoute);
app.use('/api', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api', wishlistRoute);
app.use('/api', orderRoute);
app.use('/api', reviewRoute);
app.use('/api', messageRoute);
app.use('/api/admin', adminRoute);

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