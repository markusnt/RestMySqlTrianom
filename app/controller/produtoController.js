'use strict'

var Produto = require('../models/produto')

exports.list_all_produto = function(req, res) {
    Produto.getAllProduto(function(err, produto) {

        console.log('controllerProduto')
        if(err)
            res.send(err)
            // console.log('res', produto)
        res.send(produto)
    })
}

exports.create_a_produto = function(req, res) {
    var new_produto = new Produto(req.body)

    if(!new_produto.ds_produto || !new_produto.cd_produto ||
        !new_produto.cd_subgrupo || !new_produto.pr_produto) {
            res.status(400).send({ error: true, message: 'Please Provider information'})
        } else {
            Produto.createProduto(new_produto, function(err, produto){
                if(err)
                    res.send(err)
                res.json(produto)
            })
        }
}

exports.read_a_produto = function(req, res) {
    Produto.getProdutoByCd(req.params.produtoCd, function(err, produto) {
        if(err)
            res.send(err)
        res.json(produto) 
    })
}

exports.delete_a_produto = function(req, res) {
    Produto.remove( req.params.produtoCd, function(err, produto) {
        if(err)
            res.send(err)
        res.json({ message: 'Produto Successfully'})
    })
}