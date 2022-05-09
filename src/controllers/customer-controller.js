'use strict';


const validationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.post = async (req, res, next) => {

    let contract = new validationContract();
    contract.hasMinLen(req.body.name, 3, 'o nome deve conter pelo menos 3 caracters')
    contract.isEmail(req.body.email, 'E-mail invalido')
    contract.hasMinLen(req.body.password, 6, 'a senha deve conter pelo menos 3 caracters')

    // se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);
        res.status(200).send({
            message: 'Cliente  cadrastado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }
};
