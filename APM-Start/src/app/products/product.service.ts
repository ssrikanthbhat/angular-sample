import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
    private productServiceUrl = './api/products/products.json'
    constructor(private httpClient : HttpClient){}
    getProducts(): Observable<IProduct[]> {
        return this.httpClient.get<IProduct[]>(this.productServiceUrl);
    }
}