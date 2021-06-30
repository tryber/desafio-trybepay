
const { check, validationResult } = require('express-validator');
const pagamentoDao = require('../persistencia/PagamentoDao');
const express = require('express');
const router = express.Router();


    router.get("/", (req, res) => { 
        console.log('buscando pagamentos...');

        pagamentoDao.lista(function(exception, result){
            console.log('pagamentos listados: ' + result);

            res.status(200).json(result);

        });
    });

    router.post('/', 
    
    [check("forma_de_pagamento", "Forma de pagamento é obrigatória.").notEmpty(),
    check("valor", "Valor é obrigatório e deve ser um decimal.").isFloat(),
    check("moeda", "Moeda é obrigatória e deve ter 3 caracteres").isLength({ min: 3, max: 3 })] ,
    
    (req, res) => {
        var pagamento = req.body;
        var errors = validationResult(req);
        
        if (!errors.isEmpty()){
            console.log("Erros de validação encontrados");
            res.status(400).send(errors);
            return;
        }

        console.log('processando pagamento...');

        pagamento.status = "CRIADO";
        pagamento.data = new Date;    

        pagamentoDao.salva(pagamento, function(exception, result){
            console.log('pagamento criado: ' + result);
            res.location('/pagamentos/' + result.insertId);
            res.status(201).json(pagamento);

        });
    });

    router.put('/:id',(req, res) => {
        var pagamento = {};
        var id = req.params.id;

        pagamento.id = id;
        pagamento.status = 'CONFIRMADO';

        pagamentoDao.atualiza(pagamento, function(erro){
            if (erro){
                res.status(500).send(erro);
                return;
            }
            console.log('pagamento confirmado');
            res.status(200).json(pagamento);
        });
    });

    router.delete('/:id', function(req, res){
        var pagamento = {};
        var id = req.params.id;

        pagamento.id = id;
        pagamento.status = 'CANCELADO';

        pagamentoDao.atualiza(pagamento, function(erro){
            if (erro){
                res.status(500).send(erro);
                return;
            }
            console.log('pagamento cancelado');
            res.status(204).send(pagamento);
        });
    });


module.exports = router;



