'use strict'

var Venda = require('../models/venda')

// exports.InsertVenda = function(req, res) {
//     var new_venda = new Venda(req.body)

//     if(!new_venda.cd_usuario || !new_venda.cd_mesa ||
//         !new_venda.cd_produto || !new_venda.quantidade  ) {
//             res.status(400).send({ error: true, message: 'Falta informacoes'})
//         } else {
//             Venda.createVenda(new_venda, function(err, venda) {
//                 if(err)
//                     res.send(err)
//                 res.json(venda)
//             })
//         }
// }

// exports.InsertVenda = function(req, res) {
//     var new_venda = new Venda(req.body)

//     if(!new_venda.cd_usuario || !new_venda.cd_mesa ||
//         !new_venda.cd_produto || !new_venda.quantidade  ) {
//             res.status(400).send({ error: true, message: 'Falta informacoes'})
//         } else {
//             Venda.createVenda(new_venda, function(err, venda) {
//                 if(err)
//                     res.send(err)
//                 res.json(venda)
//             })
//         }
// }

// https://www.luiztools.com.br/post/como-usar-nodejs-mysql/#2

exports.Insert_Venda = function(req, res) {
  var new_venda = new Venda(req.body);

  //handles null error 
  if(!new_venda.cd_usuario || !new_venda.cd_mesa ||
    !new_venda.cd_produto || !new_venda.quantidade  ) {

            res.status(400).send({ error:true, message: 'Please provide task/status' });

        }
else{
  
    Venda.InsertVenda(new_venda, function(err, venda) {
    
    if (err)
      res.send(err);
    res.json(venda);
  });
}
};