import { produtoSchema } from '../../resources/schemas/request-produto-schema'

export class ProdutoController {
  handle (httpRequest: any): any {
    try {
      const { error } = produtoSchema.validate(httpRequest.body)

      if (error) {
        return {
          statusCode: 400,
          body: new Error(`Campo obrigatorio: ${error.details['0'].path['0']}`)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
}
