import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGuardService } from "./product-guard.service";
import { FormsModule } from "@angular/forms";
import { ProductService } from "./product.service";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductListComponent } from "./product-list.component";
import { SharedModule } from './../shared/shared.module';
import { ConvertToSpacesPipe } from "./ConvertToSpacesPipe";
import { ProductRoutingModule } from './../router/product-routing.module';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    SharedModule,
    ProductRoutingModule,
  ],
  declarations: [ ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe],
  providers: [ProductService, ProductGuardService]
})
export class ProductModule { }
