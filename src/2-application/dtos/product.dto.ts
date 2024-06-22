export class ProductDTO {
  constructor (
    public name: string,
    public price: string,
    public id_category: string,
    public url_img: string,
    public description: string,
  ) {}
}

// export interface ProductDTO {
//   name: string
//   price: string
//   id_category: string
//   url_img: string
//   description: string
// }
