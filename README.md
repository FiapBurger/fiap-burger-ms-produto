# Microsservico de Produtos
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/karma-runner/karma-coverage)
[![Coverage Status](https://img.shields.io/badge/coverage-87%25-brightgreen.svg?style=flat-square)](https://your-link-here)


## Cobetura de testes
![Cobertura](./assets/cobertura.png)

```
src/
  ├── 1-entities/
  │   └── product.entity.ts
  ├── 2-application
  │   ├── usecases/
  │   │    ├── add-product.usecase.ts  
  │   │    └── get-product-by-id.usecase.ts
  │   ├── interfaces
  │   │    └── product-repository.interface.ts
  │   └── dtos
  │        └── product.dto.ts
  ├── 3-interface-adapter/
  │   ├── adapters/
  │   │    └── express-routes-adapter.ts
  │   ├── controllers/
  │   │    ├── add-product.controller.ts
  │   │    └── get-product-by-id.controller.ts
  │   ├── factories/
  │   │    ├── add-product.factory.ts
  │   │    └── get-product-by-id.factory.ts
  │   └── helpers/
  │        └── http.helpers.ts
  ├── 4-infrastructure/
  │   ├── mongodb/
  │   │   └── product-mongo.repository.ts
  │   └── express/
  │        ├── config/
  │        ├── middlewares/
  │        └── routes/
  └── main.ts
```

│   ├── interfaces/
│   │   └── product-repository.interface.ts
