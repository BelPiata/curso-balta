'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');

const app = express();
const router = express.Router();

// connecta ao banco
mongoose.connect ('mongodb+srv://dsotecnologias:XgSenkufJhsBPsss@local.4pfg9.mongodb.net/curso_balta');

// carregar Models 
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carregar rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);

module.exports = app;