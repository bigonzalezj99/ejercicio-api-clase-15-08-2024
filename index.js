const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const sequelize = require('./config/db.config');

// Middlewares
app.use(express.json());

// Rutas
const bookRoutes = require('./routes/book.routes');
const clientRoutes = require('./routes/client.routes');

app.use('/books', bookRoutes);
app.use('/clients', clientRoutes);

// Conectar a la base de datos y empezar el servidor
sequelize.sync()
    .then(() => {
        console.log('Database connected');
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });