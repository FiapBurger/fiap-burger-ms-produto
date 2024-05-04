import Joi from 'joi'

export const produtoSchema = Joi.object({
  nome: Joi.string().required(),
  preco: Joi.string().required(),
  id_categoria: Joi.string().required(),
  url_imagem: Joi.string().required(),
  descricao: Joi.string()
})
