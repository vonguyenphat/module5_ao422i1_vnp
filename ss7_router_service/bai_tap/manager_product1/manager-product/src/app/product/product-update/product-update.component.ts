import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.product = this.productService.findById(id);
      }
    }, error => {
    });
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(this.product.id, [Validators.required]),
      name: new FormControl(this.product.name, [Validators.required]),
      price: new FormControl(this.product.price, [Validators.required, , Validators.min(1000)]),
      description: new FormControl(this.product.description, [Validators.required]),
    });
  }
  updateProduct(id: string) {
    this.productService.updateProduct(id, this.productForm.value);
    alert('Cập nhật thành công');
  }
}
