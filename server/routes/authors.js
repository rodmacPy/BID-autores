const { Router } = require('express');
const { check } = require('express-validator');
const {
    autoresGet,
    authorPost,
    autoresPut,
    productosPatch,
    autoresDelete,
    AutorOneGet
} = require('../controllers/authors');


const router = Router();

router.get('/', autoresGet);

router.post('/', authorPost
);
router.get('/:id', AutorOneGet);

router.put('/:id', autoresPut);

router.patch('/', productosPatch);

router.delete('/:id', autoresDelete);

module.exports = router;