const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');

const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comment');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for Blog',
        version: '1.0.0',
        description: 'This is a REST API application made with Express. It makes a Blog-API where you can post and comment on your own blog',
        contact: {
            name: 'Walid Wagdy',
            url: 'https://www.facebook.com/walidwagdy95/'
        }
    },
    servers: [
        {
            url: 'https://whispering-escarpment-67172.herokuapp.com/',
            description: 'Production server',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./docs/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);


const app = express();
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const DB_URI = 'mongodb+srv://<user>:<password>@cluster0.xi3um.mongodb.net/imaging?retryWrites=true&w=majority';

app.use(express.json());    // application/json
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// Error handling middleware
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

app.use('/blog', blogRoutes);
app.use('/auth', authRoutes);
app.use(commentRoutes);

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(process.env.PORT || 3000);
    })
    .catch(err => console.log(err));
