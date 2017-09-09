import { Component } from '@angular/core';
import { ProductService } from "./products/product.service";

@Component({
  selector: 'pm-root',
  template:`
  <div>
    <nav class='navbar navbar-default'>
    <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav navbar-nav'>
        <li><a [routerLink]="['/welcome']">Home</a></li>
        <li><a [routerLink]="['/products']">Product List</a></li>
      </ul>
    </nav>
  </div>
  <router-outlet></router-outlet>
  `,
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management'
}
