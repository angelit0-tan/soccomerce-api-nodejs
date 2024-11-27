require('dotenv').config();
const express = require('express');
const app = express();

// Routes
const userRoutes = require('./routes/userRoutes.js');
const eventRoutes = require('./routes/eventRoutes.js');
const postRoutes = require('./routes/postRoutes.js');
const groupRoutes = require('./routes/groupRoutes.js');

// Middleware
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

// database
const connectDB = require('./db/connect');

// use middleware
app.use(helmet());
app.use(morgan('tiny'));
app.use(mongoSanitize());
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/posts', postRoutes);

const port = process.env.PORT || 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();