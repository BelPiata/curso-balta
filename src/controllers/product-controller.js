'use strict';

const validationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');
const { type } = require('express/lib/response');
const guid = require('guid');
var config = require('../config');




exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({
            message: 'falha ao completar requisição'
        });
    }
}

exports.getBySlug = async(req, res, next) => {
    try{
        var data = await repository.getBySlug(req.params.slug)
        res.status(200).send(data);
    }catch(e) {
        res.status(500).send({
            message: 'falha ao completar requisição'
        });
    }
}


exports.getById = async(req, res, next) => {
    try{
        var data = await repository.getById(req.params.id);
            res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
                message : 'falha ao completar sua requisição'
        });

    }
}

exports.getByTag = async(req, res, next) => {
    try{
        const data = await repository.getByTag(req, params, tags)
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'falha ao completar sua requisição '
        })
    }
}

exports.post = async (req, res, next) => {
    let contract = new validationContract();
    contract.hasMinLen(req.body.title, 3, 'o titulo deve conter pelo menos 3 caracters')
    contract.hasMinLen(req.body.slug, 3, 'o titulo deve conter pelo menos 3 caracters')
    contract.hasMinLen(req.body.description, 3, 'o titulo deve conter pelo menos 3 caracters')

    // se os dados forem inválidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{

        // salvar imagem
        await blobSvc.createBlockBlobFromText ('product-image',folename, buffer, { 
             contentType: type
        }, function (error){
            if (error) {
                filename = 'deflault-product.png'
            }
        });


        await repository.create({
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            price: req.body.price,
            active: true,
            tags: req.body.tags,
            image:filename
        });
        res.status(200).send({
            message: 'Produto cadrastado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }
};

exports.put = async (req, res, next) => {
    try{
    await repository.update(req.params.id, req.body)
    res.status(200).send({
        message: 'produto atualizado com sucesso!'
        });
    } catch (e){
        res.status(500).send({
                message: 'falha ao processar sua requisição',
        });
    }       
};

exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'produto removido com sucesso!'
        });
    }catch (e){
        res.status(500).send({
                message: 'falha ao processar sua requisição',
        });
    }       
};
