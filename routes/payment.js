const express = require('express');

const router = express.Router();
const PagamentoController = require('../controllers/payment');

router.get('/:id', PagamentoController.findById);
router.get('/', PagamentoController.findAll);
router.post('/', PagamentoController.create);
// router.delete('/:id', PagamentoController.remove);
// router.put('/:id', PagamentoController.update);

module.exports = router;
