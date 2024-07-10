const faker = require('faker');
const boom = require('@hapi/boom')

class ProductService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {

    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }

}

module.exports = ProductService;
