'use strict';


const validationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');
const md5 = require('md5');
const emailService = require('../services/email-service');

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
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        emailService.send(
            req.body.email,
            'Bem vindo ao Node Store', 
            global.EMAIL_TMPL.replace('{0}', req.body.name));

        res.status(200).send({
            message: 'Cliente  cadrastado com sucesso!'
        });
    } catch (e) {
        console.log("error:", e);
        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }
};
