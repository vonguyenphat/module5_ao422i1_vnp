import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  constructor(private productService:ProductService,private fb: FormBuilder,private router:Router) { }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required,Validators.min(1000)]),
      description: new FormControl('',[Validators.required])
    });
  }
  submitProduct(){
    console.log(this.productForm);
    if (!this.productForm.valid) {
    }else {
      this.productService.saveProduct(this.productForm.value);
      this.router.navigateByUrl("/product/list");
    };
  }

}
