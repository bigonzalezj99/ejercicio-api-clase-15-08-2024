const Book = require('../models/book.model');

// Crear un nuevo libro
exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todos los libros
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener un libro por ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un libro
exports.updateBook = async (req, res) => {
    try {
        const [updated] = await Book.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const book = await Book.findByPk(req.params.id);
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un libro
exports.deleteBook = async (req, res) => {
    try {
        const deleted = await Book.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};