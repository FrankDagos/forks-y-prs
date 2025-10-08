import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static findProductsBelow(price: number) {
    const filteredProducts = products.filter(
      (product) => product.price < price
    );
    return filteredProducts;
  }

  id: number;
  name: string;
  price: number;
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    // esto funciona:
    this.products = this.products.concat(newProducts);
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
