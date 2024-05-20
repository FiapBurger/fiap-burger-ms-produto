# language: pt
Funcionalidade: Gerenciamento de Produtos

  Cenário: Criar um novo produto
    Dado que eu tenho os detalhes do produto
    Quando eu envio uma requisição POST para "/produtos"
    Entao o status da resposta deve ser 201