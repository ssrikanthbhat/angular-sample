import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGuardService } from "./product-guard.service";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ProductService } from "./product.service";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductListComponent } from "./product-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {path: 'products/:id',
      canActivate: [ ProductGuardService ],
      component: ProductDetailComponent }
    ])

  ],
  declarations: [],
  providers: [ProductService, ProductGuardService]
})
export class ProductModule { }
