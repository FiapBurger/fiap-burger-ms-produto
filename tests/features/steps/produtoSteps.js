"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../src/infra/http/config/app"));
(0, cucumber_1.setDefaultTimeout)(60 * 1000);
let response;
const productDetails = {
    nome: 'any_produto',
    preco: '100',
    id_categoria: 'any_id',
    url_imagem: 'any_url',
    descricao: 'any_descricao'
};
(0, cucumber_1.Given)('que eu tenho os detalhes do produto', () => {
    // Os detalhes do produto já foram definidos acima
});
(0, cucumber_1.When)('eu envio uma requisição POST para {string}', async (rota) => {
    response = await (0, supertest_1.default)(app_1.default)
        .post(rota)
        .send(productDetails)
        .set('Accept', 'application/json');
});
(0, cucumber_1.Then)('o status da resposta deve ser 201', () => {
    (0, chai_1.expect)(201);
});
(0, cucumber_1.Then)('o corpo da resposta deve conter os detalhes do produto', () => {
    (0, chai_1.expect)(response.body).to.include(productDetails);
});
