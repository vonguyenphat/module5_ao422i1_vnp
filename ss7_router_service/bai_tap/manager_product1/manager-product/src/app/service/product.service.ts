import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  products: Product[] = [{
    id: "SP01",
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: "SP02",
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: "SP03",
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: "SP04",
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: "SP05",
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];
  getAll() {
    return this.products;
  }
  saveProduct(product) {
    this.products.push(product);
  }
  findById(id: string) {
    return this.products.find(product => product.id === id);
  }
  updateProduct(id: string, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }
  deleteProduct(id: string) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
}
