const { response, request } = require('express');
const { validationResult } = require('express-validator');
// crear contrase;a segura
const Authors = require('../models/authors');


const autoresGet = async (req = request, res = response) => {
    try {
        const autores = await Authors.find({});
        res.json({
            ok: true,
            autores
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error al obtener los productos de la base de datos.'
        });
    }
}

const authorPost = async (req = request, res = response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name } = req.body;
        if (name.length < 3) {
            return res.status(400).json({ message: 'El nombre debe tener al menos 3 caracteres' });
        }
        const autor = new Authors({ name })
        await autor.save()
        res.json({
            msg: 'post API - usuariosPost',
            autor
        });
    } catch (error) {
        if (error.code === 11000) {
            // Error de duplicidad del nombre
            res.status(400).json({
                ok: false,
                message: 'El nombre del autor ya existe'
            });
        } else {
            // Otro tipo de error
            res.status(500).json({
                ok: false,
                message: 'Error al guardar el autor en la Base de Datos'
            });
        }
    }
};
const AutorOneGet = async (req, res = response) => {
    try {
        const { id } = req.params;
        const autor = await Authors.findById(id);
        if (!autor) {
            return res.status(404).json({
                ok: false,
                message: 'Autor no encontrado.'
            });
        }
        res.json({
            ok: true,
            autor
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error al obtener el autor de la base de datos.'
        });
    }
}


const autoresPut = async (req, res) => {
    const { id } = req.params; const { name } = req.body;
    if (name.length < 3) {
        return res.status(400).json({ message: 'El nombre debe tener al menos 3 caracteres' });
    }

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Update the Author
        const updatedAuthor = await Authors.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        // Send the updated Author in the response
        res.json(updatedAuthor);
    } catch (error) {
        if (error.code === 11000) {
            // Error de duplicidad del nombre
            res.status(400).json({
                ok: false,
                message: 'El nombre del autor ya existe'
            });
        } else {
            // Otro tipo de error
            res.status(500).json({
                ok: false,
                message: 'Error al guardar el autor en la Base de Datos'
            });
        }
    }
};

const productosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}


const autoresDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const autor = await Authors.findByIdAndDelete(id);
        if (!autor) {
            return res.status(404).json({
                ok: false,
                message: 'autor not found'
            });
        }
        res.json({
            ok: true,
            autor
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error al eliminar la broma de la Base de datos.'
        })
    }
}


module.exports = {
    autoresGet,
    authorPost,
    autoresPut,
    productosPatch,
    autoresDelete,
    AutorOneGet
}