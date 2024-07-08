export class ProductDTO {
  constructor (
    public name: string,
    public price: string,
    public id_category: string,
    public url_img: string,
    public description?: string
  ) {}
}
