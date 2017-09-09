import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    private _productService; 
  pageTitle: string = 'Produc List'
  imageWidth: number = 50;
  imageMargin: number =2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: IProduct[] = [];

constructor(private productService: ProductService) {}
    ngOnInit(): void {
        this.productService.getProducts().subscribe(products => this.products = products)
    }
    toggleImage(): void{
        this.showImage = !this.showImage
    }
    onNotify(message: string): void {this.pageTitle = 'Product List: ' + message; }
}