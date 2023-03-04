import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import {ProductUpdateComponent} from "./product/product-update/product-update.component";


const routes: Routes = [
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  },
  {
    path: 'product/update/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'product/view/:id',
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
