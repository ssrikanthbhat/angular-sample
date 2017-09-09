import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component'
import {ConvertToSpacesPipe} from './products/ConvertToSpacesPipe'
import { StarComponent } from "./shared/star.component";
import { HttpClientModule } from "@angular/common/http";
import {RouterModule} from "@angular/router"
import { ProductDetailsComponent } from "./products/product-detail.component";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./home/pagenotfound.component";

@NgModule({
  declarations: [
    AppComponent,ProductListComponent, ConvertToSpacesPipe, StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id', component: ProductDetailsComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent }
      ],{ useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
