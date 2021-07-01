const express = require('express');

const router = express.Router();
const PagamentoController = require('../controllers/payment');

router.get('/:id', PagamentoController.findById);
router.get('/', PagamentoController.findAll);
router.post('/', PagamentoController.create);
router.put('/confirm/:id', PagamentoController.confirm);
router.put('/cancel/:id', PagamentoController.cancel);

module.exports = router;
