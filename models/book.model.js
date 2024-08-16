const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Book = sequelize.define('Book', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pais_autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero_paginas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    anio_edicion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
});

module.exports = Book;