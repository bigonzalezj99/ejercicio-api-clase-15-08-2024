require('dotenv').config();
const { Sequelize } = require('sequelize');

// Configuración de Sequelize con SSL
const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false,
});

module.exports = sequelize;
