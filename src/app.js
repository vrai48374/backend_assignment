const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('./modules/auth/auth.routes');
const entityRoutes = require('./modules/entity/entity.routes');
const errorHandler = require('./middlewares/error.middleware');
const { swaggerUi, swaggerSpec } = require('./docs/swagger');

const app = express();

// --- CORE MIDDLEWARE (must come before routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// --- API DOCS
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// --- ROUTES
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', entityRoutes);

// --- HEALTH CHECK
app.get('/', (req, res) => res.json({ status: 'ok' }));

// --- GLOBAL ERROR HANDLER (must be last)
app.use(errorHandler);

module.exports = app;
