const Client = require('../models/client.model');

// Crear un nuevo cliente
exports.createClient = async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todos los clientes
exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener un cliente por ID
exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).json({ message: 'Client not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un cliente
exports.updateClient = async (req, res) => {
    try {
        const [updated] = await Client.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const client = await Client.findByPk(req.params.id);
            res.status(200).json(client);
        } else {
            res.status(404).json({ message: 'Client not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un cliente
exports.deleteClient = async (req, res) => {
    try {
        const deleted = await Client.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Client not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};