import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(next => {
        console.log(next);
        this.products = next;
      }, error => {
      }, () => {
      },
    )
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {

  }
}
