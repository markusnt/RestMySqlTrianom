'use strict'

var Produto = require('../models/produto')

exports.list_all_produto = (req, res) => {

    Produto.getAllProduto((err, produto) => {

        if (err || produto == '') {
            console.log("Nenhum produto Encontrado -> " + err)
            res.status(404).json({ success: false, message: 'Nenhum produto Encontrado' })
            return
        }
        res.status(200).json(produto)
    })
}

exports.read_a_produto = (req, res) => {
    Produto.getProdutoByCd(req.params._cdproduto, (err, produto) => {
        if (err || req.params._cdproduto == '') {
            console.log("Produto nao Encontrado -> " + err)
            res.status(404).json({ success: false, message: 'Produto nao Encontrado' })
            return
        }
        res.status(200).json(produto)
    })
}

exports.searchProduto = (req, res) => {
    Produto.searchProduto(req.params._cdsubgrupo, (err, produto) => {
        if (err || req.params._cdsubgrupo == '') {
            console.log("produto nao Encontrado -> " + err)
            res.status(404).json({ success: false, message: 'produto nao Encontrado' })
            return
        }
        res.status(200).json(produto)
    })
}