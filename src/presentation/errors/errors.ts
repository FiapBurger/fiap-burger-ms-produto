export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Campo obrigatorio: ${paramName}`)
    this.name = 'MissingParamError'
  }
}

export class ServerError extends Error {
  constructor () {
    super('Erro interno no servidor')
    this.name = 'ServerError'
  }
}
